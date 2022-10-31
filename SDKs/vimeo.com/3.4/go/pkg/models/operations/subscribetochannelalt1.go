package operations

import (
"openapi/pkg/models/shared")

type SubscribeToChannelAlt1PathParams struct {
    ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
    
}

type SubscribeToChannelAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SubscribeToChannelAlt1Request struct {
    PathParams SubscribeToChannelAlt1PathParams 
    Security SubscribeToChannelAlt1Security 
    
}

type SubscribeToChannelAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

