package operations

import (
"openapi/pkg/models/shared")

type RenewWebhookPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type RenewWebhookRequest struct {
    PathParams RenewWebhookPathParams 
    
}

type RenewWebhookResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    Webhook *shared.Webhook 
    
}

