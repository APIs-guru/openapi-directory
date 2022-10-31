package operations



type GetListingsSlugSimilarListingsPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetListingsSlugSimilarListingsRequest struct {
    PathParams GetListingsSlugSimilarListingsPathParams 
    
}

type GetListingsSlugSimilarListingsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

