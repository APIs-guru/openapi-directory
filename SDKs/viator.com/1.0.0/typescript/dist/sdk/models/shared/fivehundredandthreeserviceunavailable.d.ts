import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FiveHundredAndThreeServiceUnavailableCodeEnum {
    ServiceUnavailable = "SERVICE_UNAVAILABLE"
}
export declare enum FiveHundredAndThreeServiceUnavailableMessageEnum {
    InternalServerError = "Internal server error"
}
export declare class FiveHundredAndThreeServiceUnavailable extends SpeakeasyBase {
    code?: FiveHundredAndThreeServiceUnavailableCodeEnum;
    message?: FiveHundredAndThreeServiceUnavailableMessageEnum;
    timestamp?: string;
    trackingId?: string;
}
