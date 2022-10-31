package operations

import (
"openapi/pkg/models/shared")

type CheckIfUserSubscribedToChannelAlt1PathParams struct {
    ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
    
}

type CheckIfUserSubscribedToChannelAlt1Request struct {
    PathParams CheckIfUserSubscribedToChannelAlt1PathParams 
    
}

type CheckIfUserSubscribedToChannelAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

