export enum UrlService {
	sandbox = "https://doitac-tran.vnpaytest.vn/QRCreateAPIRestV2/rest/CreateQrcodeApi/createQrcode",
}

export enum HashAlgorithm {
	SHA256 = "SHA256",
	SHA512 = "SHA512",
	MD5 = "MD5",
}

export enum VnpCurrCode {
	VND = "704",
}

export enum VnpLocale {
	VN = "vn",
	EN = "en",
}

export enum VnpCardType {
	ATM = "ATM",
	QRCODE = "QRCODE",
}

export enum VnpTransactionType {
	PAYMENT = "01",
	FULL_REFUND = "02",
	PARTIAL_REFUND = "03",
}

export enum RefundTransactionType {
	FULL_REFUND = "02",
	PARTIAL_REFUND = "03",
}
