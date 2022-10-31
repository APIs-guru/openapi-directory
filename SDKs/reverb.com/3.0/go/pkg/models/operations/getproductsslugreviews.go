package operations



type GetProductsSlugReviewsPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetProductsSlugReviewsRequest struct {
    PathParams GetProductsSlugReviewsPathParams 
    
}

type GetProductsSlugReviewsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

