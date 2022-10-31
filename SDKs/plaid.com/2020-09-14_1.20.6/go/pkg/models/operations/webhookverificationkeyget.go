package operations

import (
"openapi/pkg/models/shared")

type WebhookVerificationKeyGetRequest struct {
    Request shared.WebhookVerificationKeyGetRequest `request:"mediaType=application/json"`
    
}

type WebhookVerificationKeyGetResponse struct {
    ContentType string 
    StatusCode int64 
    WebhookVerificationKeyGetResponse map[string]interface{} 
    
}

