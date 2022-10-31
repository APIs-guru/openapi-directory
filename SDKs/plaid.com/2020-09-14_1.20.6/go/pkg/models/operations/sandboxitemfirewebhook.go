package operations

import (
"openapi/pkg/models/shared")

type SandboxItemFireWebhookRequest struct {
    Request shared.SandboxItemFireWebhookRequest `request:"mediaType=application/json"`
    
}

type SandboxItemFireWebhookResponse struct {
    ContentType string 
    Error map[string]interface{} 
    SandboxItemFireWebhookResponse map[string]interface{} 
    StatusCode int64 
    
}

