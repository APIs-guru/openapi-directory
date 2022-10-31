package operations

import (
"openapi/pkg/models/shared")

type EkmanEmotionQueryParams struct {
    All *bool `queryParam:"style=form,explode=true,name=all"`
    
}

type EkmanEmotionRequest struct {
    QueryParams EkmanEmotionQueryParams 
    Request []shared.Post `request:"mediaType=application/json"`
    
}

type EkmanEmotionResponse struct {
    ContentType string 
    PredictionResults []shared.PostPredicted 
    StatusCode int64 
    ValidationErrors *shared.ValidationErrors 
    
}

