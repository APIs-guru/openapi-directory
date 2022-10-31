package operations

import (
"openapi/pkg/models/shared")

type PutWebhooksWebhookIDPathParams struct {
    WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
    
}

type PutWebhooksWebhookIDRequests struct {
    WebhookBaseInfo *shared.WebhookBaseInfo `request:"mediaType=application/*+json"`
    WebhookBaseInfo1 *shared.WebhookBaseInfo `request:"mediaType=application/json"`
    WebhookBaseInfo2 *shared.WebhookBaseInfo `request:"mediaType=application/json-patch+json"`
    WebhookBaseInfo3 *shared.WebhookBaseInfo `request:"mediaType=text/json"`
    
}

type PutWebhooksWebhookIDRequest struct {
    PathParams PutWebhooksWebhookIDPathParams 
    Request *PutWebhooksWebhookIDRequests 
    
}

type PutWebhooksWebhookIDResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    WebhookInfo *shared.WebhookInfo 
    
}

