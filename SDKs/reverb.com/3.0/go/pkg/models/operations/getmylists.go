package operations

import (
"openapi/pkg/models/shared")

type GetMyListsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyListsRequest struct {
    Security GetMyListsSecurity 
    
}

type GetMyListsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

