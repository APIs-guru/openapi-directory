import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SandboxIncomeFireWebhookRequestVerificationStatusEnum {
    VerificationStatusProcessingComplete = "VERIFICATION_STATUS_PROCESSING_COMPLETE"
,    VerificationStatusDocumentRejected = "VERIFICATION_STATUS_DOCUMENT_REJECTED"
,    VerificationStatusProcessingFailed = "VERIFICATION_STATUS_PROCESSING_FAILED"
}


// SandboxIncomeFireWebhookRequest
/** 
 * SandboxIncomeFireWebhookRequest defines the request schema for `/sandbox/income/fire_webhook`
**/
export class SandboxIncomeFireWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=income_verification_id" })
  incomeVerificationId: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=verification_status" })
  verificationStatus: SandboxIncomeFireWebhookRequestVerificationStatusEnum;

  @Metadata({ data: "json, name=webhook" })
  webhook: string;
}
