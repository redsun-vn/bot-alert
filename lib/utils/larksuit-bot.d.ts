export declare class LarkSuitAlert {
    private _webHookUrl;
    private _secretKey;
    private _timestamp;
    constructor({ webHookUrl, secretKey, timestamp, }: {
        webHookUrl: string;
        secretKey: string;
        timestamp?: string;
    });
    genSignature(): string;
    sendMessage(serviceName: string, message: string, topic?: string | null): Promise<any>;
    sendMessageError(serviceName: string, message: string, topic?: string | null): Promise<any>;
}
