package operations



type GetFeedbackFeedbackIDPathParams struct {
    FeedbackID string `pathParam:"style=simple,explode=false,name=feedback_id"`
    
}

type GetFeedbackFeedbackIDRequest struct {
    PathParams GetFeedbackFeedbackIDPathParams 
    
}

type GetFeedbackFeedbackIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

