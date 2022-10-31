package operations

import (
"openapi/pkg/models/shared")

type PostMyNegotiationsIDAcceptPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostMyNegotiationsIDAcceptRequestBody struct {
    Message *string `json:"message,omitempty"`
    
}

type PostMyNegotiationsIDAcceptSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyNegotiationsIDAcceptRequest struct {
    PathParams PostMyNegotiationsIDAcceptPathParams 
    Request *PostMyNegotiationsIDAcceptRequestBody `request:"mediaType=application/json"`
    Security PostMyNegotiationsIDAcceptSecurity 
    
}

type PostMyNegotiationsIDAcceptResponse struct {
    ContentType string 
    StatusCode int64 
    
}

