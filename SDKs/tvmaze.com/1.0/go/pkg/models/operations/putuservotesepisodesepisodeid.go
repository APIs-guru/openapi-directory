package operations

import (
"openapi/pkg/models/shared")

type PutUserVotesEpisodesEpisodeIDPathParams struct {
    EpisodeID int64 `pathParam:"style=simple,explode=false,name=episode_id"`
    
}

type PutUserVotesEpisodesEpisodeIDRequest struct {
    PathParams PutUserVotesEpisodesEpisodeIDPathParams 
    Request *shared.EpisodeVote `request:"mediaType=application/json"`
    
}

type PutUserVotesEpisodesEpisodeIDResponse struct {
    ContentType string 
    EpisodeVote *shared.EpisodeVote 
    StatusCode int64 
    
}

