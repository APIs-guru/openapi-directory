import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FourHundredAndOneUnauthorizedCodeEnum {
    Unauthorized = "UNAUTHORIZED"
}
export declare enum FourHundredAndOneUnauthorizedMessageEnum {
    InvalidApiKey = "Invalid API key"
}
export declare class FourHundredAndOneUnauthorized extends SpeakeasyBase {
    code?: FourHundredAndOneUnauthorizedCodeEnum;
    message?: FourHundredAndOneUnauthorizedMessageEnum;
    timestamp?: string;
    trackingId?: string;
}
