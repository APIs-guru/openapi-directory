package operations

import (
"openapi/pkg/models/shared")

type SentimentQueryParams struct {
    All *bool `queryParam:"style=form,explode=true,name=all"`
    
}

type SentimentRequest struct {
    QueryParams SentimentQueryParams 
    Request []shared.Post `request:"mediaType=application/json"`
    
}

type SentimentResponse struct {
    ContentType string 
    PredictionResults []shared.PostPredicted 
    StatusCode int64 
    ValidationErrors *shared.ValidationErrors 
    
}

