package operations

import (
"openapi/pkg/models/shared")

type GetMyFollowsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyFollowsRequest struct {
    Security GetMyFollowsSecurity 
    
}

type GetMyFollowsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

