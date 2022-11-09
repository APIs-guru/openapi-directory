import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UnregisterMfaRequestMfaTypeEnum {
    Yubikey = "YUBIKEY"
,    Totp = "TOTP"
}


export class UnregisterMfaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=mfaType" })
  mfaType: UnregisterMfaRequestMfaTypeEnum;

  @Metadata({ data: "json, name=verificationCode" })
  verificationCode?: string;
}
