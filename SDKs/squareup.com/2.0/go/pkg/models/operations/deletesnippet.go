package operations

import (
"openapi/pkg/models/shared")

type DeleteSnippetPathParams struct {
    SiteID string `pathParam:"style=simple,explode=false,name=site_id"`
    
}

type DeleteSnippetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteSnippetRequest struct {
    PathParams DeleteSnippetPathParams 
    Security DeleteSnippetSecurity 
    
}

type DeleteSnippetResponse struct {
    ContentType string 
    DeleteSnippetResponse *shared.DeleteSnippetResponse 
    StatusCode int64 
    
}

