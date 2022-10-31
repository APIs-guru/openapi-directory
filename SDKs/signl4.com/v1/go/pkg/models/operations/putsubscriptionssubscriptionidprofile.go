package operations

import (
"openapi/pkg/models/shared")

type PutSubscriptionsSubscriptionIDProfilePathParams struct {
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type PutSubscriptionsSubscriptionIDProfileRequests struct {
    SubscriptionProfile *shared.SubscriptionProfile `request:"mediaType=application/*+json"`
    SubscriptionProfile1 *shared.SubscriptionProfile `request:"mediaType=application/json"`
    SubscriptionProfile2 *shared.SubscriptionProfile `request:"mediaType=application/json-patch+json"`
    SubscriptionProfile3 *shared.SubscriptionProfile `request:"mediaType=text/json"`
    
}

type PutSubscriptionsSubscriptionIDProfileRequest struct {
    PathParams PutSubscriptionsSubscriptionIDProfilePathParams 
    Request *PutSubscriptionsSubscriptionIDProfileRequests 
    
}

type PutSubscriptionsSubscriptionIDProfileResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    SubscriptionInfo *shared.SubscriptionInfo 
    
}

