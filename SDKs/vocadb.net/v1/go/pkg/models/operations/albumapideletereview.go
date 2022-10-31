package operations



type AlbumAPIDeleteReviewPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    ReviewID int32 `pathParam:"style=simple,explode=false,name=reviewId"`
    
}

type AlbumAPIDeleteReviewRequest struct {
    PathParams AlbumAPIDeleteReviewPathParams 
    
}

type AlbumAPIDeleteReviewResponse struct {
    ContentType string 
    StatusCode int64 
    
}

