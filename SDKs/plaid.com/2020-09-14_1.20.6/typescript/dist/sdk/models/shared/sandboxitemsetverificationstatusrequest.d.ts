import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SandboxItemSetVerificationStatusRequestVerificationStatusEnum {
    AutomaticallyVerified = "automatically_verified",
    VerificationExpired = "verification_expired"
}
/**
 * SandboxItemSetVerificationStatusRequest defines the request schema for `/sandbox/item/set_verification_status`
**/
export declare class SandboxItemSetVerificationStatusRequest extends SpeakeasyBase {
    accessToken: string;
    accountId: string;
    clientId?: string;
    secret?: string;
    verificationStatus: SandboxItemSetVerificationStatusRequestVerificationStatusEnum;
}
