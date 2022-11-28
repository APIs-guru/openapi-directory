import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FiveHundredInternalServerErrorCodeEnum {
    InternalServerError = "INTERNAL_SERVER_ERROR"
}
export declare enum FiveHundredInternalServerErrorMessageEnum {
    InternalServerError = "Internal server error"
}
export declare class FiveHundredInternalServerError extends SpeakeasyBase {
    code?: FiveHundredInternalServerErrorCodeEnum;
    message?: FiveHundredInternalServerErrorMessageEnum;
    timestamp?: string;
    trackingId?: string;
}
