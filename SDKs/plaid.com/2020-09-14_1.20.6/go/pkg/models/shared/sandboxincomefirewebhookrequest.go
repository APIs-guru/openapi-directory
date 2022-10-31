package shared




type SandboxIncomeFireWebhookRequestVerificationStatusEnum string

const (
    SandboxIncomeFireWebhookRequestVerificationStatusEnumVerificationStatusProcessingComplete SandboxIncomeFireWebhookRequestVerificationStatusEnum = "VERIFICATION_STATUS_PROCESSING_COMPLETE"
SandboxIncomeFireWebhookRequestVerificationStatusEnumVerificationStatusDocumentRejected SandboxIncomeFireWebhookRequestVerificationStatusEnum = "VERIFICATION_STATUS_DOCUMENT_REJECTED"
SandboxIncomeFireWebhookRequestVerificationStatusEnumVerificationStatusProcessingFailed SandboxIncomeFireWebhookRequestVerificationStatusEnum = "VERIFICATION_STATUS_PROCESSING_FAILED"
)


type SandboxIncomeFireWebhookRequest struct {
    ClientID *string `json:"client_id,omitempty"`
    IncomeVerificationID string `json:"income_verification_id"`
    Secret *string `json:"secret,omitempty"`
    VerificationStatus SandboxIncomeFireWebhookRequestVerificationStatusEnum `json:"verification_status"`
    Webhook string `json:"webhook"`
    
}

