package operations

import (
"openapi/pkg/models/shared")

type GetMyPayoutsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyPayoutsRequest struct {
    Security GetMyPayoutsSecurity 
    
}

type GetMyPayoutsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

