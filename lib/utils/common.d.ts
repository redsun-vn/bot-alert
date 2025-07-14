import { type BinaryLike } from "node:crypto";
import type { HashAlgorithm } from "../enums";
export declare function getDateInGMT7(date?: Date): Date;
/**
 * Định dạng lại ngày theo định dạng của VNPay, mặc định là yyMMddHHmm
 * @en Format date to VNPay format, default is yyMMddHHmm
 *
 * @param date date to format
 * @param format format of date
 * @returns formatted date
 */
export declare function dateFormat(date: Date, format?: string): number;
/**
 * Parse a vnpay date format number to date
 * @param dateNumber An vnpay date format number
 * @returns Date
 */
export declare function parseDate(dateNumber: number | string, tz?: "utc" | "local" | "gmt7"): Date;
/**
 * Validate if the date is match with format `yyyyMMddHHmm` or not
 * @param date The date to be validated
 * @returns True if the date is valid, false otherwise
 */
export declare function isValidVnpayDateFormat(dtStr: string): boolean;
export declare function generateRandomString(length: number, options?: {
    onlyNumber?: boolean;
}): string;
export declare function resolveUrlString(host: string, path: string): string;
export declare function hash(secret: string, data: BinaryLike, algorithm: HashAlgorithm): string;
