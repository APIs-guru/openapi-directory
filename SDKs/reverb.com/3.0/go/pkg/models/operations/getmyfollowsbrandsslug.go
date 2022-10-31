package operations

import (
"openapi/pkg/models/shared")

type GetMyFollowsBrandsSlugPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetMyFollowsBrandsSlugSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyFollowsBrandsSlugRequest struct {
    PathParams GetMyFollowsBrandsSlugPathParams 
    Security GetMyFollowsBrandsSlugSecurity 
    
}

type GetMyFollowsBrandsSlugResponse struct {
    ContentType string 
    StatusCode int64 
    
}

