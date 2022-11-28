import { SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";
export declare enum UserResponseMfaStatusEnum {
    Registered = "REGISTERED",
    Unregistered = "UNREGISTERED"
}
export declare enum UserResponseMfaTypeEnum {
    Sms = "SMS",
    Yubikey = "YUBIKEY",
    Totp = "TOTP"
}
export declare enum UserResponseStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Pending = "PENDING"
}
export declare class UserResponse extends SpeakeasyBase {
    email?: string;
    entityId?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    lockedOut?: boolean;
    lockedOutTimestamp?: Date;
    mfaStatus?: UserResponseMfaStatusEnum;
    mfaType?: UserResponseMfaTypeEnum;
    primaryContactNumber?: string;
    roles?: Role[];
    secondaryContactNumber?: string;
    smsNumber?: string;
    status?: UserResponseStatusEnum;
}
