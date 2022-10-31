package operations

import (
"openapi/pkg/models/shared")

type FollowUserPathParams struct {
    FollowUserID float64 `pathParam:"style=simple,explode=false,name=follow_user_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type FollowUserSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type FollowUserRequest struct {
    PathParams FollowUserPathParams 
    Security FollowUserSecurity 
    
}

type FollowUserResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

