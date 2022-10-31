package operations

import (
"openapi/pkg/models/shared")

type GetMyFollowsCollectionsSlugPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetMyFollowsCollectionsSlugSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyFollowsCollectionsSlugRequest struct {
    PathParams GetMyFollowsCollectionsSlugPathParams 
    Security GetMyFollowsCollectionsSlugSecurity 
    
}

type GetMyFollowsCollectionsSlugResponse struct {
    ContentType string 
    StatusCode int64 
    
}

