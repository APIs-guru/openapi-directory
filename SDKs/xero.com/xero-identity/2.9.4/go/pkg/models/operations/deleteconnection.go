package operations

import (
"openapi/pkg/models/shared")

type DeleteConnectionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteConnectionSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type DeleteConnectionRequest struct {
    PathParams DeleteConnectionPathParams 
    Security DeleteConnectionSecurity 
    
}

type DeleteConnectionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

