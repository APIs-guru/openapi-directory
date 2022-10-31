package operations



type GetShopsSlugFeedbackSellerPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetShopsSlugFeedbackSellerRequest struct {
    PathParams GetShopsSlugFeedbackSellerPathParams 
    
}

type GetShopsSlugFeedbackSellerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

