package operations

import (
"openapi/pkg/models/shared")

type CancelSubscriptionPathParams struct {
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription_id"`
    
}

type CancelSubscriptionSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CancelSubscriptionRequest struct {
    PathParams CancelSubscriptionPathParams 
    Security CancelSubscriptionSecurity 
    
}

type CancelSubscriptionResponse struct {
    CancelSubscriptionResponse *shared.CancelSubscriptionResponse 
    ContentType string 
    StatusCode int64 
    
}

