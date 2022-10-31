package operations

import (
"openapi/pkg/models/shared")

type DeleteInlineScriptTagPathParams struct {
    InlineScriptTagID int64 `pathParam:"style=simple,explode=false,name=inlineScriptTagId"`
    
}

type DeleteInlineScriptTagSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type DeleteInlineScriptTagRequest struct {
    PathParams DeleteInlineScriptTagPathParams 
    Security DeleteInlineScriptTagSecurity 
    
}

type DeleteInlineScriptTagResponse struct {
    ContentType string 
    StatusCode int64 
    
}

