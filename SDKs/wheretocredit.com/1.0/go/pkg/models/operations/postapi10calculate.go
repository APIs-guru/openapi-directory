package operations

import (
"openapi/pkg/models/shared")

type PostAPI10CalculateRequest struct {
    Request []shared.Itinerary `request:"mediaType=application/json"`
    
}

type PostAPI10CalculateResponse struct {
    CalculateResults []shared.CalculateResult 
    ContentType string 
    StatusCode int64 
    
}

