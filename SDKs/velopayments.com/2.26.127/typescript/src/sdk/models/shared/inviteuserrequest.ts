import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InviteUserRequestMfaTypeEnum {
    Sms = "SMS"
,    Yubikey = "YUBIKEY"
,    Totp = "TOTP"
}


export class InviteUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=entityId" })
  entityId?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=mfaType" })
  mfaType: InviteUserRequestMfaTypeEnum;

  @Metadata({ data: "json, name=primaryContactNumber" })
  primaryContactNumber: string;

  @Metadata({ data: "json, name=roles" })
  roles: string[];

  @Metadata({ data: "json, name=secondaryContactNumber" })
  secondaryContactNumber?: string;

  @Metadata({ data: "json, name=smsNumber" })
  smsNumber: string;

  @Metadata({ data: "json, name=verificationCode" })
  verificationCode?: string;
}
