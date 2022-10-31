package operations

import (
"openapi/pkg/models/shared")

type WebhookDeleteRequest struct {
    Request shared.SubscribeToEventBody `request:"mediaType=application/json"`
    
}

type WebhookDeleteResponse struct {
    ContentType string 
    EventSubscriptionsResponse *shared.EventSubscriptionsResponse 
    StatusCode int64 
    
}

