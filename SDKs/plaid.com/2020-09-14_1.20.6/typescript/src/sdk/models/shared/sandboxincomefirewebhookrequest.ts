import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SandboxIncomeFireWebhookRequestVerificationStatusEnum {
    VerificationStatusProcessingComplete = "VERIFICATION_STATUS_PROCESSING_COMPLETE",
    VerificationStatusDocumentRejected = "VERIFICATION_STATUS_DOCUMENT_REJECTED",
    VerificationStatusProcessingFailed = "VERIFICATION_STATUS_PROCESSING_FAILED"
}


// SandboxIncomeFireWebhookRequest
/** 
 * SandboxIncomeFireWebhookRequest defines the request schema for `/sandbox/income/fire_webhook`
**/
export class SandboxIncomeFireWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=income_verification_id" })
  incomeVerificationId: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=verification_status" })
  verificationStatus: SandboxIncomeFireWebhookRequestVerificationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook: string;
}
