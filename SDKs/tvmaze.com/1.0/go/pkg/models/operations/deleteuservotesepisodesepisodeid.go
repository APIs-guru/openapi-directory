package operations



type DeleteUserVotesEpisodesEpisodeIDPathParams struct {
    EpisodeID int64 `pathParam:"style=simple,explode=false,name=episode_id"`
    
}

type DeleteUserVotesEpisodesEpisodeIDRequest struct {
    PathParams DeleteUserVotesEpisodesEpisodeIDPathParams 
    
}

type DeleteUserVotesEpisodesEpisodeIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

