package operations

import (
"openapi/pkg/models/shared")

type DeleteMyFollowsHandpickedSlugPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type DeleteMyFollowsHandpickedSlugSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteMyFollowsHandpickedSlugRequest struct {
    PathParams DeleteMyFollowsHandpickedSlugPathParams 
    Security DeleteMyFollowsHandpickedSlugSecurity 
    
}

type DeleteMyFollowsHandpickedSlugResponse struct {
    ContentType string 
    StatusCode int64 
    
}

