package operations



type GetAPIMembersIDThumbnailPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPIMembersIDThumbnailRequest struct {
    PathParams GetAPIMembersIDThumbnailPathParams 
    
}

type GetAPIMembersIDThumbnailResponse struct {
    ContentType string 
    StatusCode int64 
    
}

