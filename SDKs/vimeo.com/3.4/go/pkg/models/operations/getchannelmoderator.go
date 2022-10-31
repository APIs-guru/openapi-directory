package operations

import (
"openapi/pkg/models/shared")

type GetChannelModeratorPathParams struct {
    ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetChannelModeratorRequest struct {
    PathParams GetChannelModeratorPathParams 
    
}

type GetChannelModeratorResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

