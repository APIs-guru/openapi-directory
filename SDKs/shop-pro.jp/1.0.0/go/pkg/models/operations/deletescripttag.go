package operations

import (
"openapi/pkg/models/shared")

type DeleteScriptTagPathParams struct {
    ScriptTagID int64 `pathParam:"style=simple,explode=false,name=scriptTagId"`
    
}

type DeleteScriptTagSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type DeleteScriptTagRequest struct {
    PathParams DeleteScriptTagPathParams 
    Security DeleteScriptTagSecurity 
    
}

type DeleteScriptTagResponse struct {
    ContentType string 
    StatusCode int64 
    
}

