package operations

import (
"openapi/pkg/models/shared")

type SubscribeToChannelPathParams struct {
    ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type SubscribeToChannelSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SubscribeToChannelRequest struct {
    PathParams SubscribeToChannelPathParams 
    Security SubscribeToChannelSecurity 
    
}

type SubscribeToChannelResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

