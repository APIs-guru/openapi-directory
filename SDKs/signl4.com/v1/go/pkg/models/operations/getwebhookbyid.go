package operations

import (
"openapi/pkg/models/shared")

type GetWebhookByIDPathParams struct {
    WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
    
}

type GetWebhookByIDRequest struct {
    PathParams GetWebhookByIDPathParams 
    
}

type GetWebhookByIDResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    GetWebhookByID200ApplicationJSONString *string 
    GetWebhookByID200TextJSONString *string 
    GetWebhookByID200TextPlainString *string 
    StatusCode int64 
    
}

