import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FourHundredAndSixNotAcceptableCodeEnum {
    InvalidHeaderValue = "INVALID_HEADER_VALUE"
}
export declare class FourHundredAndSixNotAcceptable extends SpeakeasyBase {
    code?: FourHundredAndSixNotAcceptableCodeEnum;
    message?: string;
    timestamp?: string;
    trackingId?: string;
}
