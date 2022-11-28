import { SpeakeasyBase } from "../../../internal/utils";
export declare class SmsQueryParams extends SpeakeasyBase {
    debug?: number;
    delay?: string;
    details?: number;
    flash?: number;
    foreignId?: string;
    from?: string;
    json?: number;
    label?: string;
    noReload?: number;
    performanceTracking?: number;
    returnMsgId?: number;
    text: string;
    to: string;
    udh?: string;
    unicode?: number;
    utf8?: number;
}
export declare class Sms200ApplicationJsonMessages extends SpeakeasyBase {
    encoding?: string;
    error?: string;
    errorText?: string;
    id?: string;
    messages?: string[];
    parts?: number;
    price?: number;
    recipient?: string;
    sender?: string;
    success?: boolean;
    text?: string;
}
export declare enum Sms200ApplicationJsonSmsTypeEnum {
    Economy = "economy",
    Direct = "direct"
}
export declare class Sms200ApplicationJson extends SpeakeasyBase {
    balance?: number;
    debug?: string;
    messages?: Sms200ApplicationJsonMessages[];
    smsType?: Sms200ApplicationJsonSmsTypeEnum;
    success?: string;
    totalPrice?: number;
}
export declare class SmsRequest extends SpeakeasyBase {
    queryParams: SmsQueryParams;
}
export declare class SmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    sms200ApplicationJsonObject?: Sms200ApplicationJson;
    statusCode: number;
}
