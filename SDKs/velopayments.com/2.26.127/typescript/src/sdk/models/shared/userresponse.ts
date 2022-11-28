import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";


export enum UserResponseMfaStatusEnum {
    Registered = "REGISTERED",
    Unregistered = "UNREGISTERED"
}

export enum UserResponseMfaTypeEnum {
    Sms = "SMS",
    Yubikey = "YUBIKEY",
    Totp = "TOTP"
}

export enum UserResponseStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Pending = "PENDING"
}


export class UserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=lockedOut" })
  lockedOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lockedOutTimestamp" })
  lockedOutTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=mfaStatus" })
  mfaStatus?: UserResponseMfaStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=mfaType" })
  mfaType?: UserResponseMfaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=primaryContactNumber" })
  primaryContactNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: Role })
  roles?: Role[];

  @SpeakeasyMetadata({ data: "json, name=secondaryContactNumber" })
  secondaryContactNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=smsNumber" })
  smsNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UserResponseStatusEnum;
}
