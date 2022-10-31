package operations



type ArtistAPIDeletePathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ArtistAPIDeleteQueryParams struct {
    Notes *string `queryParam:"style=form,explode=true,name=notes"`
    
}

type ArtistAPIDeleteRequest struct {
    PathParams ArtistAPIDeletePathParams 
    QueryParams ArtistAPIDeleteQueryParams 
    
}

type ArtistAPIDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

