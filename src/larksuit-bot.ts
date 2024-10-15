import * as crypto from 'crypto';
import axios from 'axios';
import { HashAlgorithm } from './enums';

export class LarkSuitAlert {
    private _webHookUrl;
    private _secretKey;
    private _timestamp;

	public constructor({ webHookUrl ,secretKey, timestamp }: {
        webHookUrl: string,
        secretKey: string,
        timestamp: string,
    }) {
        this._webHookUrl = webHookUrl;
        this._secretKey = secretKey;
        this._timestamp = timestamp;
    }

	genSignature(): string {
        // Step 1: Concatenate timestamp and secret
        const dataToSign = this._timestamp + "\n" + this._secretKey;
        // Step 2: Create HMAC using SHA-256
        const hmac = crypto.createHmac(HashAlgorithm.SHA256, this._secretKey);
        // Step 3: Update HMAC with the data to sign
        hmac.update(dataToSign);
        // Step 4: Generate the signature and encode it in Base64
        return hmac.digest('base64');
	}
    
    async sendMessage(sign: string , message: string): Promise<any> {
        console.log(JSON.stringify({
            timestamp: this._timestamp,
            sign: sign,
            msg_type: "text",
            content: {
                text: message
            }
        }))
        return axios.post<any>(this._webHookUrl, {
            timestamp: this._timestamp,
            sign: sign,
            msg_type: "text",
            content: {
                text: message
            }
        });
    }
}
