package operations

import (
"openapi/pkg/models/shared")

type EmotionQueryParams struct {
    All *bool `queryParam:"style=form,explode=true,name=all"`
    
}

type EmotionRequest struct {
    QueryParams EmotionQueryParams 
    Request []shared.Post `request:"mediaType=application/json"`
    
}

type EmotionResponse struct {
    ContentType string 
    PredictionResults []shared.PostPredicted 
    StatusCode int64 
    ValidationErrors *shared.ValidationErrors 
    
}

