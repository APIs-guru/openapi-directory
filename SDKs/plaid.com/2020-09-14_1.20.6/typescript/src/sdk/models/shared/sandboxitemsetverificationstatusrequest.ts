import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SandboxItemSetVerificationStatusRequestVerificationStatusEnum {
    AutomaticallyVerified = "automatically_verified",
    VerificationExpired = "verification_expired"
}


// SandboxItemSetVerificationStatusRequest
/** 
 * SandboxItemSetVerificationStatusRequest defines the request schema for `/sandbox/item/set_verification_status`
**/
export class SandboxItemSetVerificationStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=verification_status" })
  verificationStatus: SandboxItemSetVerificationStatusRequestVerificationStatusEnum;
}
