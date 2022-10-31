package operations



type DeletePhotoPathParams struct {
    PhotoID string `pathParam:"style=simple,explode=false,name=photo_id"`
    
}

type DeletePhotoRequest struct {
    PathParams DeletePhotoPathParams 
    
}

type DeletePhotoResponse struct {
    ContentType string 
    StatusCode int64 
    
}

