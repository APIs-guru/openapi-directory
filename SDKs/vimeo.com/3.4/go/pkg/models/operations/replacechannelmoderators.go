package operations

import (
"openapi/pkg/models/shared")

type ReplaceChannelModeratorsPathParams struct {
    ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
    
}

type ReplaceChannelModeratorsRequestBody struct {
    UserURI string `json:"user_uri"`
    
}

type ReplaceChannelModeratorsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ReplaceChannelModeratorsRequest struct {
    PathParams ReplaceChannelModeratorsPathParams 
    Request ReplaceChannelModeratorsRequestBody `request:"mediaType=application/json"`
    Security ReplaceChannelModeratorsSecurity 
    
}

type ReplaceChannelModeratorsResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    LegacyError *shared.LegacyError 
    Users []shared.User 
    
}

