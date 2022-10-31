package operations

import (
"openapi/pkg/models/shared")

type AddVideoPrivacyUsersPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type AddVideoPrivacyUsersSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type AddVideoPrivacyUsersRequest struct {
    PathParams AddVideoPrivacyUsersPathParams 
    Security AddVideoPrivacyUsersSecurity 
    
}

type AddVideoPrivacyUsersResponse struct {
    ContentType string 
    StatusCode int64 
    Users []shared.User 
    
}

