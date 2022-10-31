package operations

import (
"openapi/pkg/models/shared")

type DeleteWantsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteWantsIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteWantsIDRequest struct {
    PathParams DeleteWantsIDPathParams 
    Security DeleteWantsIDSecurity 
    
}

type DeleteWantsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

