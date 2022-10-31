package operations



type SharePostPathParams struct {
    PostID string `pathParam:"style=simple,explode=false,name=post_id"`
    
}

type SharePostRequest struct {
    PathParams SharePostPathParams 
    
}

type SharePostResponse struct {
    ContentType string 
    StatusCode int64 
    
}

