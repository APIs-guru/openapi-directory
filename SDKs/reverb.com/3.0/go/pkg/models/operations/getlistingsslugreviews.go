package operations



type GetListingsSlugReviewsPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetListingsSlugReviewsRequest struct {
    PathParams GetListingsSlugReviewsPathParams 
    
}

type GetListingsSlugReviewsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

