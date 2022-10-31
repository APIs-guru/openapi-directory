package operations

import (
"openapi/pkg/models/shared")

type PersonalityQueryParams struct {
    All *bool `queryParam:"style=form,explode=true,name=all"`
    
}

type PersonalityRequest struct {
    QueryParams PersonalityQueryParams 
    Request []shared.Post `request:"mediaType=application/json"`
    
}

type PersonalityResponse struct {
    ContentType string 
    PredictionResults []shared.PostPredicted 
    StatusCode int64 
    ValidationErrors *shared.ValidationErrors 
    
}

