import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UnregisterMfaRequestMfaTypeEnum {
    Yubikey = "YUBIKEY",
    Totp = "TOTP"
}
export declare class UnregisterMfaRequest extends SpeakeasyBase {
    mfaType: UnregisterMfaRequestMfaTypeEnum;
    verificationCode?: string;
}
