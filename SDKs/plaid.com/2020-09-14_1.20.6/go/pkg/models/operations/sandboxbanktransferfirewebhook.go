package operations

import (
"openapi/pkg/models/shared")

type SandboxBankTransferFireWebhookRequest struct {
    Request shared.SandboxBankTransferFireWebhookRequest `request:"mediaType=application/json"`
    
}

type SandboxBankTransferFireWebhookResponse struct {
    ContentType string 
    Error map[string]interface{} 
    SandboxBankTransferFireWebhookResponse *shared.SandboxBankTransferFireWebhookResponse 
    StatusCode int64 
    
}

