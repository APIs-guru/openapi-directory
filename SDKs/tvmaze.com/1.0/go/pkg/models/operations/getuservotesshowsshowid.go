package operations

import (
"openapi/pkg/models/shared")

type GetUserVotesShowsShowIDPathParams struct {
    ShowID int64 `pathParam:"style=simple,explode=false,name=show_id"`
    
}

type GetUserVotesShowsShowIDRequest struct {
    PathParams GetUserVotesShowsShowIDPathParams 
    
}

type GetUserVotesShowsShowIDResponse struct {
    ContentType string 
    ShowVote *shared.ShowVote 
    StatusCode int64 
    
}

