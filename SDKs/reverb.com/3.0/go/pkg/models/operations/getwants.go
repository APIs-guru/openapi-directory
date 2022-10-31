package operations

import (
"openapi/pkg/models/shared")

type GetWantsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetWantsRequest struct {
    Security GetWantsSecurity 
    
}

type GetWantsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

