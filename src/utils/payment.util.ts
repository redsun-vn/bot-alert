import type { HashAlgorithm } from "src/enums";
import { hash } from "./common";

export function genSignature(secretKey: string, timestamp?: number): string {
	return `${secretKey}|${timestamp || 1000}`;
}

export function calculateSecureHash(
	secureSecret: string,
	data: string,
	hashAlgorithm: HashAlgorithm,
	bufferEncode: BufferEncoding = "utf-8",
): string {
	return hash(secureSecret, Buffer.from(data, bufferEncode), hashAlgorithm);
}

export function verifySecureHash(
	secureSecret: string,
	data: string,
	hashAlgorithm: HashAlgorithm,
	receivedHash: string,
): boolean {
	const calculatedHash = calculateSecureHash(secureSecret, data, hashAlgorithm);
	return calculatedHash === receivedHash;
}
