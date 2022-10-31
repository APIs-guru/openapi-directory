package operations



type GetComicIDInfo0JSONPathParams struct {
    ComicID float64 `pathParam:"style=simple,explode=false,name=comicId"`
    
}

type GetComicIDInfo0JSONRequest struct {
    PathParams GetComicIDInfo0JSONPathParams 
    
}

type GetComicIDInfo0JSONResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

