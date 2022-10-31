package operations

import (
"openapi/pkg/models/shared")

type GetSubscriptionsSubscriptionIDChannelPricesPathParams struct {
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type GetSubscriptionsSubscriptionIDChannelPricesRequest struct {
    PathParams GetSubscriptionsSubscriptionIDChannelPricesPathParams 
    
}

type GetSubscriptionsSubscriptionIDChannelPricesResponse struct {
    Body []byte 
    ChannelPriceInfo *shared.ChannelPriceInfo 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

