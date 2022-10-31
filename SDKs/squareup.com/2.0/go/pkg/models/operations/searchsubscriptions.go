package operations

import (
"openapi/pkg/models/shared")

type SearchSubscriptionsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SearchSubscriptionsRequest struct {
    Request shared.SearchSubscriptionsRequest `request:"mediaType=application/json"`
    Security SearchSubscriptionsSecurity 
    
}

type SearchSubscriptionsResponse struct {
    ContentType string 
    SearchSubscriptionsResponse *shared.SearchSubscriptionsResponse 
    StatusCode int64 
    
}

