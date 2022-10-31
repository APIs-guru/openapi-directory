package operations



type DeleteBookmarkPathParams struct {
    PostID string `pathParam:"style=simple,explode=false,name=post_id"`
    
}

type DeleteBookmarkRequest struct {
    PathParams DeleteBookmarkPathParams 
    
}

type DeleteBookmarkResponse struct {
    ContentType string 
    StatusCode int64 
    
}

