package operations

import (
"openapi/pkg/models/shared")

type PostMyFollowsCollectionsSlugPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type PostMyFollowsCollectionsSlugSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyFollowsCollectionsSlugRequest struct {
    PathParams PostMyFollowsCollectionsSlugPathParams 
    Security PostMyFollowsCollectionsSlugSecurity 
    
}

type PostMyFollowsCollectionsSlugResponse struct {
    ContentType string 
    StatusCode int64 
    
}

