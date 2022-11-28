import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InviteUserRequestMfaTypeEnum {
    Sms = "SMS",
    Yubikey = "YUBIKEY",
    Totp = "TOTP"
}
export declare class InviteUserRequest extends SpeakeasyBase {
    email: string;
    entityId?: string;
    firstName?: string;
    lastName?: string;
    mfaType: InviteUserRequestMfaTypeEnum;
    primaryContactNumber: string;
    roles: string[];
    secondaryContactNumber?: string;
    smsNumber: string;
    verificationCode?: string;
}
