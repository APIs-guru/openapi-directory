package operations

import (
"openapi/pkg/models/shared")

type GetSubscriptionsSubscriptionIDTeamsPathParams struct {
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type GetSubscriptionsSubscriptionIDTeamsRequest struct {
    PathParams GetSubscriptionsSubscriptionIDTeamsPathParams 
    
}

type GetSubscriptionsSubscriptionIDTeamsResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    TeamInfos []shared.TeamInfo 
    
}

