package operations

import (
"openapi/pkg/models/shared")

type GetSubscriptionsSubscriptionIDFeaturesPathParams struct {
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type GetSubscriptionsSubscriptionIDFeaturesRequest struct {
    PathParams GetSubscriptionsSubscriptionIDFeaturesPathParams 
    
}

type GetSubscriptionsSubscriptionIDFeaturesResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    SubscriptionFeatures []shared.SubscriptionFeature 
    
}

