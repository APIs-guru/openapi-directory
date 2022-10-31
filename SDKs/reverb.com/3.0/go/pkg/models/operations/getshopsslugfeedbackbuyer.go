package operations



type GetShopsSlugFeedbackBuyerPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetShopsSlugFeedbackBuyerRequest struct {
    PathParams GetShopsSlugFeedbackBuyerPathParams 
    
}

type GetShopsSlugFeedbackBuyerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

