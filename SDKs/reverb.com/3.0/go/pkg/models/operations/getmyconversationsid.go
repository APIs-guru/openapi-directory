package operations

import (
"openapi/pkg/models/shared")

type GetMyConversationsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetMyConversationsIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyConversationsIDRequest struct {
    PathParams GetMyConversationsIDPathParams 
    Security GetMyConversationsIDSecurity 
    
}

type GetMyConversationsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

