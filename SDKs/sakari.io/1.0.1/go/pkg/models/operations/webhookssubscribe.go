package operations

import (
"openapi/pkg/models/shared")

type WebhooksSubscribePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type WebhooksSubscribeRequestBody struct {
    EventTypes []string `json:"eventTypes,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type WebhooksSubscribeSecurity struct {
    SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
    
}

type WebhooksSubscribeRequest struct {
    PathParams WebhooksSubscribePathParams 
    Request WebhooksSubscribeRequestBody `request:"mediaType=application/json"`
    Security WebhooksSubscribeSecurity 
    
}

type WebhooksSubscribeResponse struct {
    ContentType string 
    StatusCode int64 
    WebhookResponse *shared.WebhookResponse 
    
}

