package operations

import (
"openapi/pkg/models/shared")

type DeleteWebhooksWebhookIDPathParams struct {
    WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
    
}

type DeleteWebhooksWebhookIDRequest struct {
    PathParams DeleteWebhooksWebhookIDPathParams 
    
}

type DeleteWebhooksWebhookIDResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

