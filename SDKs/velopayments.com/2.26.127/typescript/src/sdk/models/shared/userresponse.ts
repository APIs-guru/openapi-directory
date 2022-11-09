import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Role } from "./role";

export enum UserResponseMfaStatusEnum {
    Registered = "REGISTERED"
,    Unregistered = "UNREGISTERED"
}

export enum UserResponseMfaTypeEnum {
    Sms = "SMS"
,    Yubikey = "YUBIKEY"
,    Totp = "TOTP"
}

export enum UserResponseStatusEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
,    Pending = "PENDING"
}


export class UserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=entityId" })
  entityId?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=lockedOut" })
  lockedOut?: boolean;

  @Metadata({ data: "json, name=lockedOutTimestamp" })
  lockedOutTimestamp?: Date;

  @Metadata({ data: "json, name=mfaStatus" })
  mfaStatus?: UserResponseMfaStatusEnum;

  @Metadata({ data: "json, name=mfaType" })
  mfaType?: UserResponseMfaTypeEnum;

  @Metadata({ data: "json, name=primaryContactNumber" })
  primaryContactNumber?: string;

  @Metadata({ data: "json, name=roles", elemType: shared.Role })
  roles?: Role[];

  @Metadata({ data: "json, name=secondaryContactNumber" })
  secondaryContactNumber?: string;

  @Metadata({ data: "json, name=smsNumber" })
  smsNumber?: string;

  @Metadata({ data: "json, name=status" })
  status?: UserResponseStatusEnum;
}
