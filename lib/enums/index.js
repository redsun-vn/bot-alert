"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundTransactionType = exports.VnpTransactionType = exports.VnpCardType = exports.VnpLocale = exports.VnpCurrCode = exports.HashAlgorithm = exports.UrlService = void 0;
var UrlService;
(function (UrlService) {
    UrlService["sandbox"] = "https://doitac-tran.vnpaytest.vn/QRCreateAPIRestV2/rest/CreateQrcodeApi/createQrcode";
})(UrlService || (exports.UrlService = UrlService = {}));
var HashAlgorithm;
(function (HashAlgorithm) {
    HashAlgorithm["SHA256"] = "SHA256";
    HashAlgorithm["SHA512"] = "SHA512";
    HashAlgorithm["MD5"] = "MD5";
})(HashAlgorithm || (exports.HashAlgorithm = HashAlgorithm = {}));
var VnpCurrCode;
(function (VnpCurrCode) {
    VnpCurrCode["VND"] = "704";
})(VnpCurrCode || (exports.VnpCurrCode = VnpCurrCode = {}));
var VnpLocale;
(function (VnpLocale) {
    VnpLocale["VN"] = "vn";
    VnpLocale["EN"] = "en";
})(VnpLocale || (exports.VnpLocale = VnpLocale = {}));
var VnpCardType;
(function (VnpCardType) {
    VnpCardType["ATM"] = "ATM";
    VnpCardType["QRCODE"] = "QRCODE";
})(VnpCardType || (exports.VnpCardType = VnpCardType = {}));
var VnpTransactionType;
(function (VnpTransactionType) {
    VnpTransactionType["PAYMENT"] = "01";
    VnpTransactionType["FULL_REFUND"] = "02";
    VnpTransactionType["PARTIAL_REFUND"] = "03";
})(VnpTransactionType || (exports.VnpTransactionType = VnpTransactionType = {}));
var RefundTransactionType;
(function (RefundTransactionType) {
    RefundTransactionType["FULL_REFUND"] = "02";
    RefundTransactionType["PARTIAL_REFUND"] = "03";
})(RefundTransactionType || (exports.RefundTransactionType = RefundTransactionType = {}));
