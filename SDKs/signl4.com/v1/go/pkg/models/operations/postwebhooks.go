package operations

import (
"openapi/pkg/models/shared")

type PostWebhooksRequests struct {
    WebhookBaseInfo *shared.WebhookBaseInfo `request:"mediaType=application/*+json"`
    WebhookBaseInfo1 *shared.WebhookBaseInfo `request:"mediaType=application/json"`
    WebhookBaseInfo2 *shared.WebhookBaseInfo `request:"mediaType=application/json-patch+json"`
    WebhookBaseInfo3 *shared.WebhookBaseInfo `request:"mediaType=text/json"`
    
}

type PostWebhooksRequest struct {
    Request *PostWebhooksRequests 
    
}

type PostWebhooksResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    PostWebhooks201ApplicationJSONString *string 
    PostWebhooks201TextJSONString *string 
    PostWebhooks201TextPlainString *string 
    StatusCode int64 
    
}

