package operations

import (
"openapi/pkg/models/shared")

type PostMyFollowsShopsSlugPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type PostMyFollowsShopsSlugSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyFollowsShopsSlugRequest struct {
    PathParams PostMyFollowsShopsSlugPathParams 
    Security PostMyFollowsShopsSlugSecurity 
    
}

type PostMyFollowsShopsSlugResponse struct {
    ContentType string 
    StatusCode int64 
    
}

