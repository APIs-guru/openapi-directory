package operations



type DeleteUserVotesShowsShowIDPathParams struct {
    ShowID int64 `pathParam:"style=simple,explode=false,name=show_id"`
    
}

type DeleteUserVotesShowsShowIDRequest struct {
    PathParams DeleteUserVotesShowsShowIDPathParams 
    
}

type DeleteUserVotesShowsShowIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

