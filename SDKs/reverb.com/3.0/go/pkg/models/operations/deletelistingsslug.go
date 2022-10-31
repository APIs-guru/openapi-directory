package operations

import (
"openapi/pkg/models/shared")

type DeleteListingsSlugPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type DeleteListingsSlugSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteListingsSlugRequest struct {
    PathParams DeleteListingsSlugPathParams 
    Security DeleteListingsSlugSecurity 
    
}

type DeleteListingsSlugResponse struct {
    ContentType string 
    StatusCode int64 
    
}

