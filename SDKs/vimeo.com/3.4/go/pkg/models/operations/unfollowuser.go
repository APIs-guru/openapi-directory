package operations

import (
"openapi/pkg/models/shared")

type UnfollowUserPathParams struct {
    FollowUserID float64 `pathParam:"style=simple,explode=false,name=follow_user_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type UnfollowUserSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UnfollowUserRequest struct {
    PathParams UnfollowUserPathParams 
    Security UnfollowUserSecurity 
    
}

type UnfollowUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

