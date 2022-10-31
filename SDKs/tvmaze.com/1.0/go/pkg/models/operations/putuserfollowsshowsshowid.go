package operations

import (
"openapi/pkg/models/shared")

type PutUserFollowsShowsShowIDPathParams struct {
    ShowID int64 `pathParam:"style=simple,explode=false,name=show_id"`
    
}

type PutUserFollowsShowsShowIDRequest struct {
    PathParams PutUserFollowsShowsShowIDPathParams 
    
}

type PutUserFollowsShowsShowIDResponse struct {
    ContentType string 
    ShowFollow *shared.ShowFollow 
    StatusCode int64 
    
}

