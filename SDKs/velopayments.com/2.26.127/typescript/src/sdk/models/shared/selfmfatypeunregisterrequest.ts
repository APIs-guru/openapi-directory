import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SelfMfaTypeUnregisterRequestMfaTypeEnum {
    Sms = "SMS",
    Yubikey = "YUBIKEY",
    Totp = "TOTP"
}


export class SelfMfaTypeUnregisterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mfaType" })
  mfaType: SelfMfaTypeUnregisterRequestMfaTypeEnum;
}
