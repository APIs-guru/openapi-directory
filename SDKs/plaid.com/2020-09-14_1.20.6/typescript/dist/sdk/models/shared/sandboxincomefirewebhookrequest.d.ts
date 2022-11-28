import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SandboxIncomeFireWebhookRequestVerificationStatusEnum {
    VerificationStatusProcessingComplete = "VERIFICATION_STATUS_PROCESSING_COMPLETE",
    VerificationStatusDocumentRejected = "VERIFICATION_STATUS_DOCUMENT_REJECTED",
    VerificationStatusProcessingFailed = "VERIFICATION_STATUS_PROCESSING_FAILED"
}
/**
 * SandboxIncomeFireWebhookRequest defines the request schema for `/sandbox/income/fire_webhook`
**/
export declare class SandboxIncomeFireWebhookRequest extends SpeakeasyBase {
    clientId?: string;
    incomeVerificationId: string;
    secret?: string;
    verificationStatus: SandboxIncomeFireWebhookRequestVerificationStatusEnum;
    webhook: string;
}
