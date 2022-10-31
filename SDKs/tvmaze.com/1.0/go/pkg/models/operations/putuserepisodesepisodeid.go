package operations

import (
"openapi/pkg/models/shared")

type PutUserEpisodesEpisodeIDPathParams struct {
    EpisodeID int64 `pathParam:"style=simple,explode=false,name=episode_id"`
    
}

type PutUserEpisodesEpisodeIDRequest struct {
    PathParams PutUserEpisodesEpisodeIDPathParams 
    Request *shared.MarkedEpisode `request:"mediaType=application/json"`
    
}

type PutUserEpisodesEpisodeIDResponse struct {
    ContentType string 
    MarkedEpisode *shared.MarkedEpisode 
    StatusCode int64 
    
}

