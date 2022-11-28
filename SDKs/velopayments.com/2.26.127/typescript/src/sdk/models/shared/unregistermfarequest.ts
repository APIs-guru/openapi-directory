import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UnregisterMfaRequestMfaTypeEnum {
    Yubikey = "YUBIKEY",
    Totp = "TOTP"
}


export class UnregisterMfaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mfaType" })
  mfaType: UnregisterMfaRequestMfaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=verificationCode" })
  verificationCode?: string;
}
