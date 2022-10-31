package operations

import (
"openapi/pkg/models/shared")

type PutMyConversationsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutMyConversationsIDRequestBody struct {
    Read *bool `json:"read,omitempty"`
    
}

type PutMyConversationsIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutMyConversationsIDRequest struct {
    PathParams PutMyConversationsIDPathParams 
    Request *PutMyConversationsIDRequestBody `request:"mediaType=application/json"`
    Security PutMyConversationsIDSecurity 
    
}

type PutMyConversationsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

