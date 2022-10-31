package operations

import (
"openapi/pkg/models/shared")

type PostMyNegotiationsIDDeclinePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostMyNegotiationsIDDeclineSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyNegotiationsIDDeclineRequest struct {
    PathParams PostMyNegotiationsIDDeclinePathParams 
    Security PostMyNegotiationsIDDeclineSecurity 
    
}

type PostMyNegotiationsIDDeclineResponse struct {
    ContentType string 
    StatusCode int64 
    
}

