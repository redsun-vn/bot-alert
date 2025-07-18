/**
 * Truyền vào `loggerFn` để bỏ qua logger
 *
 * @en Pass to `loggerFn` for ignoring logger
 * @returns {void}
 */
export declare function ignoreLogger(): void;
/**
 * Ghi dữ liệu ra console
 *
 * @en Log data to console
 * @param data - Data to be logged
 */
export declare function consoleLogger(data: unknown, symbol?: keyof Console): void;
/**
 * Ghi dữ liệu ra file
 *
 * @en Log data to file
 * @param data Data to be logged
 * @param filePath File path to be written
 * @param errorCallback Error callback function
 */
export declare function fileLogger(data: unknown, filePath: string, errorCallback?: unknown): void;
