package operations

import (
"openapi/pkg/models/shared")

type FollowUsersPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type FollowUsersRequestBody struct {
    Users []string `json:"users"`
    
}

type FollowUsersSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type FollowUsersRequest struct {
    PathParams FollowUsersPathParams 
    Request FollowUsersRequestBody `request:"mediaType=application/json"`
    Security FollowUsersSecurity 
    
}

type FollowUsersResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    
}

