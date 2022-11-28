import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InviteUserRequestMfaTypeEnum {
    Sms = "SMS",
    Yubikey = "YUBIKEY",
    Totp = "TOTP"
}


export class InviteUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=mfaType" })
  mfaType: InviteUserRequestMfaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=primaryContactNumber" })
  primaryContactNumber: string;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles: string[];

  @SpeakeasyMetadata({ data: "json, name=secondaryContactNumber" })
  secondaryContactNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=smsNumber" })
  smsNumber: string;

  @SpeakeasyMetadata({ data: "json, name=verificationCode" })
  verificationCode?: string;
}
