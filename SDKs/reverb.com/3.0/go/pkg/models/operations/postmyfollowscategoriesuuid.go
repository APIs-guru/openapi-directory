package operations

import (
"openapi/pkg/models/shared")

type PostMyFollowsCategoriesUUIDPathParams struct {
    UUID string `pathParam:"style=simple,explode=false,name=uuid"`
    
}

type PostMyFollowsCategoriesUUIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyFollowsCategoriesUUIDRequest struct {
    PathParams PostMyFollowsCategoriesUUIDPathParams 
    Security PostMyFollowsCategoriesUUIDSecurity 
    
}

type PostMyFollowsCategoriesUUIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

