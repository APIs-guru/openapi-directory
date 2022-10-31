package operations

import (
"openapi/pkg/models/shared")

type GetMyNegotiationsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetMyNegotiationsIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyNegotiationsIDRequest struct {
    PathParams GetMyNegotiationsIDPathParams 
    Security GetMyNegotiationsIDSecurity 
    
}

type GetMyNegotiationsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

