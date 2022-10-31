package operations

import (
"openapi/pkg/models/shared")

type AddVideoPrivacyUserPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type AddVideoPrivacyUserSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type AddVideoPrivacyUserRequest struct {
    PathParams AddVideoPrivacyUserPathParams 
    Security AddVideoPrivacyUserSecurity 
    
}

type AddVideoPrivacyUserResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    User *shared.User 
    
}

