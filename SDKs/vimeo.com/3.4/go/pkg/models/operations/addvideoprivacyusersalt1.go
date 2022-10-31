package operations

import (
"openapi/pkg/models/shared")

type AddVideoPrivacyUsersAlt1PathParams struct {
    ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type AddVideoPrivacyUsersAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type AddVideoPrivacyUsersAlt1Request struct {
    PathParams AddVideoPrivacyUsersAlt1PathParams 
    Security AddVideoPrivacyUsersAlt1Security 
    
}

type AddVideoPrivacyUsersAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Users []shared.User 
    
}

