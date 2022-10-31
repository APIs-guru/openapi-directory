package operations

import (
"openapi/pkg/models/shared")

type CreateWebhookRequest struct {
    Request shared.WebhookCreate `request:"mediaType=application/json"`
    
}

type CreateWebhookResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    Webhook *shared.Webhook 
    
}

