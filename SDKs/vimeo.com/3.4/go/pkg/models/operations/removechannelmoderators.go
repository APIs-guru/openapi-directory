package operations

import (
"openapi/pkg/models/shared")

type RemoveChannelModeratorsPathParams struct {
    ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
    
}

type RemoveChannelModeratorsRequestBody struct {
    UserURI string `json:"user_uri"`
    
}

type RemoveChannelModeratorsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RemoveChannelModeratorsRequest struct {
    PathParams RemoveChannelModeratorsPathParams 
    Request RemoveChannelModeratorsRequestBody `request:"mediaType=application/vnd.vimeo.user+json"`
    Security RemoveChannelModeratorsSecurity 
    
}

type RemoveChannelModeratorsResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    User *shared.User 
    
}

