import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SelfMfaTypeUnregisterRequestMfaTypeEnum {
    Sms = "SMS",
    Yubikey = "YUBIKEY",
    Totp = "TOTP"
}
export declare class SelfMfaTypeUnregisterRequest extends SpeakeasyBase {
    mfaType: SelfMfaTypeUnregisterRequestMfaTypeEnum;
}
