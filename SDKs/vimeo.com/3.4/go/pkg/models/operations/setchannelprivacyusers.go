package operations

import (
"openapi/pkg/models/shared")

type SetChannelPrivacyUsersPathParams struct {
    ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
    
}

type SetChannelPrivacyUsersRequestBody struct {
    Users []string `json:"users"`
    
}

type SetChannelPrivacyUsersSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SetChannelPrivacyUsersRequest struct {
    PathParams SetChannelPrivacyUsersPathParams 
    Request SetChannelPrivacyUsersRequestBody `request:"mediaType=application/vnd.vimeo.user+json"`
    Security SetChannelPrivacyUsersSecurity 
    
}

type SetChannelPrivacyUsersResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    Users []shared.User 
    
}

