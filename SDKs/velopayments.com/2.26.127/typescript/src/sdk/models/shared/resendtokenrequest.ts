import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ResendTokenRequestTokenTypeEnum {
    InviteMfaUser = "INVITE_MFA_USER"
,    MfaRegistration = "MFA_REGISTRATION"
}


export class ResendTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=tokenType" })
  tokenType: ResendTokenRequestTokenTypeEnum;

  @Metadata({ data: "json, name=verificationCode" })
  verificationCode?: string;
}
