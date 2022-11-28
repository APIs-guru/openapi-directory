import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ResendTokenRequestTokenTypeEnum {
    InviteMfaUser = "INVITE_MFA_USER",
    MfaRegistration = "MFA_REGISTRATION"
}
export declare class ResendTokenRequest extends SpeakeasyBase {
    tokenType: ResendTokenRequestTokenTypeEnum;
    verificationCode?: string;
}
