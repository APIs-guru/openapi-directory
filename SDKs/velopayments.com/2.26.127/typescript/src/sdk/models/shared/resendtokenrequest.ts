import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ResendTokenRequestTokenTypeEnum {
    InviteMfaUser = "INVITE_MFA_USER",
    MfaRegistration = "MFA_REGISTRATION"
}


export class ResendTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tokenType" })
  tokenType: ResendTokenRequestTokenTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=verificationCode" })
  verificationCode?: string;
}
