import crypto, { type BinaryLike } from "node:crypto";
import { tz, utc } from "moment-timezone";
import type { HashAlgorithm } from "../enums";

export function getDateInGMT7(date?: Date): Date {
	return new Date(
		tz(date ?? new Date(), "Asia/Ho_Chi_Minh").format(
			"YYYY-MM-DDTHH:mm:ss.SSS[Z]",
		),
	);
}

/**
 * Định dạng lại ngày theo định dạng của VNPay, mặc định là yyMMddHHmm
 * @en Format date to VNPay format, default is yyMMddHHmm
 *
 * @param date date to format
 * @param format format of date
 * @returns formatted date
 */
export function dateFormat(date: Date, format = "yyMMddHHmm"): number {
	const pad = (n: number) => (n < 10 ? `0${n}` : n).toString();
	const year = date.getFullYear();
	const month = pad(date.getMonth() + 1);
	const day = pad(date.getDate());
	const hour = pad(date.getHours());
	const minute = pad(date.getMinutes());

	return Number(
		format
			.replace("yyyy", year.toString())
			.replace("MM", month)
			.replace("dd", day)
			.replace("HH", hour)
			.replace("mm", minute),
	);
}

/**
 * Parse a vnpay date format number to date
 * @param dateNumber An vnpay date format number
 * @returns Date
 */
export function parseDate(
	dateNumber: number | string,
	tz: "utc" | "local" | "gmt7" = "local",
): Date {
	const dateString = dateNumber.toString();

	const _parseInt = Number.parseInt;

	const year = _parseInt(dateString.slice(0, 4));
	const month = _parseInt(dateString.slice(4, 6)) - 1; // months are 0-indexed in JavaScript
	const day = _parseInt(dateString.slice(6, 8));
	const hour = _parseInt(dateString.slice(8, 10));
	const minute = _parseInt(dateString.slice(10, 12));
	const second = _parseInt(dateString.slice(12, 14));

	switch (tz) {
		case "utc":
			return new Date(
				utc([year, month, day, hour, minute, second], true).format(
					"YYYY-MM-DDTHH:mm:ss.SSS[Z]",
				),
			);
		case "gmt7":
			return getDateInGMT7(new Date(year, month, day, hour, minute, second));
		// biome-ignore lint/complexity/noUselessSwitchCase: still good to readable
		case "local":
		default:
			return new Date(year, month, day, hour, minute, second);
	}
}

/**
 * Validate if the date is match with format `yyyyMMddHHmm` or not
 * @param date The date to be validated
 * @returns True if the date is valid, false otherwise
 */
export function isValidVnpayDateFormat(dtStr: string): boolean {
	// Biểu thức chính quy để kiểm tra định dạng
	const pattern =
		/^20(2[4-9]|[3-9][0-9])([0-1][0-9]|2[0-3])(0[1-9]|[12][0-9]|3[01])(0[0-9]|1[0-9]|2[0-3])(00|[0-5][0-9])$/;

	return pattern.test(dtStr);
}

export function generateRandomString(
	length: number,
	options?: {
		onlyNumber?: boolean;
	},
) {
	let result = "";
	let characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	if (options?.onlyNumber) {
		characters = "0123456789";
	}
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += `${characters[(Math.random() * charactersLength) | 0]}`;
	}
	return result;
}

export function resolveUrlString(host: string, path: string): string {
	let trimmedHost = host.trim();
	let trimmedPath = path.trim();

	while (trimmedHost.endsWith("/") || trimmedHost.endsWith("\\")) {
		trimmedHost = trimmedHost.slice(0, -1);
	}
	while (trimmedPath.startsWith("/") || trimmedPath.startsWith("\\")) {
		trimmedPath = trimmedPath.slice(1);
	}
	return `${trimmedHost}/${trimmedPath}`;
}

export function hash(
	secret: string,
	data: BinaryLike,
	algorithm: HashAlgorithm,
): string {
	return crypto.createHmac(algorithm, secret).update(data).digest("hex");
}
