package operations

import (
"openapi/pkg/models/shared")

type CreateSubscriptionSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateSubscriptionRequest struct {
    Request shared.CreateSubscriptionRequest `request:"mediaType=application/json"`
    Security CreateSubscriptionSecurity 
    
}

type CreateSubscriptionResponse struct {
    ContentType string 
    CreateSubscriptionResponse *shared.CreateSubscriptionResponse 
    StatusCode int64 
    
}

