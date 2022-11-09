import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SelfMfaTypeUnregisterRequestMfaTypeEnum {
    Sms = "SMS"
,    Yubikey = "YUBIKEY"
,    Totp = "TOTP"
}


export class SelfMfaTypeUnregisterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=mfaType" })
  mfaType: SelfMfaTypeUnregisterRequestMfaTypeEnum;
}
