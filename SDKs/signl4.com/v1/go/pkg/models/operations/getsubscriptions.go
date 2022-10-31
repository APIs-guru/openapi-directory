package operations

import (
"openapi/pkg/models/shared")

type GetSubscriptionsResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    SubscriptionInfos []shared.SubscriptionInfo 
    
}

