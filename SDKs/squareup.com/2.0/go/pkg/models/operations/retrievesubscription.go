package operations

import (
"openapi/pkg/models/shared")

type RetrieveSubscriptionPathParams struct {
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
    
}

type RetrieveSubscriptionSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveSubscriptionRequest struct {
    PathParams RetrieveSubscriptionPathParams 
    Security RetrieveSubscriptionSecurity 
    
}

type RetrieveSubscriptionResponse struct {
    ContentType string 
    RetrieveSubscriptionResponse *shared.RetrieveSubscriptionResponse 
    StatusCode int64 
    
}

