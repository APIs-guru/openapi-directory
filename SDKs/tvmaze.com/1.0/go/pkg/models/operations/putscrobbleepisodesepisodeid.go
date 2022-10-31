package operations

import (
"openapi/pkg/models/shared")

type PutScrobbleEpisodesEpisodeIDPathParams struct {
    EpisodeID int64 `pathParam:"style=simple,explode=false,name=episode_id"`
    
}

type PutScrobbleEpisodesEpisodeIDRequest struct {
    PathParams PutScrobbleEpisodesEpisodeIDPathParams 
    Request *shared.MarkedEpisode `request:"mediaType=application/json"`
    
}

type PutScrobbleEpisodesEpisodeIDResponse struct {
    ContentType string 
    MarkedEpisode *shared.MarkedEpisode 
    StatusCode int64 
    
}

