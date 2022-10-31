package operations

import (
"openapi/pkg/models/shared")

type GetUserEpisodesEpisodeIDPathParams struct {
    EpisodeID int64 `pathParam:"style=simple,explode=false,name=episode_id"`
    
}

type GetUserEpisodesEpisodeIDRequest struct {
    PathParams GetUserEpisodesEpisodeIDPathParams 
    
}

type GetUserEpisodesEpisodeIDResponse struct {
    ContentType string 
    MarkedEpisode *shared.MarkedEpisode 
    StatusCode int64 
    
}

