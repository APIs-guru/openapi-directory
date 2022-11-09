import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SandboxItemSetVerificationStatusRequestVerificationStatusEnum {
    AutomaticallyVerified = "automatically_verified"
,    VerificationExpired = "verification_expired"
}


// SandboxItemSetVerificationStatusRequest
/** 
 * SandboxItemSetVerificationStatusRequest defines the request schema for `/sandbox/item/set_verification_status`
**/
export class SandboxItemSetVerificationStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=account_id" })
  accountId: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=verification_status" })
  verificationStatus: SandboxItemSetVerificationStatusRequestVerificationStatusEnum;
}
