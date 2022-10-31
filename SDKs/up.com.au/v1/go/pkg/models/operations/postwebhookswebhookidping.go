package operations

import (
"openapi/pkg/models/shared")

type PostWebhooksWebhookIDPingPathParams struct {
    WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
    
}

type PostWebhooksWebhookIDPingRequest struct {
    PathParams PostWebhooksWebhookIDPingPathParams 
    
}

type PostWebhooksWebhookIDPingResponse struct {
    ContentType string 
    StatusCode int64 
    WebhookEventCallback *shared.WebhookEventCallback 
    
}

