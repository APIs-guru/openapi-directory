package operations



type DeleteUserEpisodesEpisodeIDPathParams struct {
    EpisodeID int64 `pathParam:"style=simple,explode=false,name=episode_id"`
    
}

type DeleteUserEpisodesEpisodeIDRequest struct {
    PathParams DeleteUserEpisodesEpisodeIDPathParams 
    
}

type DeleteUserEpisodesEpisodeIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

