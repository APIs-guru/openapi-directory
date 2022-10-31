package operations



type GetCuratedSetsSlugPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetCuratedSetsSlugRequest struct {
    PathParams GetCuratedSetsSlugPathParams 
    
}

type GetCuratedSetsSlugResponse struct {
    ContentType string 
    StatusCode int64 
    
}

