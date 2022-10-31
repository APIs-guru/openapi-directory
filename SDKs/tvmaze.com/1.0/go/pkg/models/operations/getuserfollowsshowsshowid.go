package operations

import (
"openapi/pkg/models/shared")

type GetUserFollowsShowsShowIDPathParams struct {
    ShowID int64 `pathParam:"style=simple,explode=false,name=show_id"`
    
}

type GetUserFollowsShowsShowIDRequest struct {
    PathParams GetUserFollowsShowsShowIDPathParams 
    
}

type GetUserFollowsShowsShowIDResponse struct {
    ContentType string 
    ShowFollow *shared.ShowFollow 
    StatusCode int64 
    
}

