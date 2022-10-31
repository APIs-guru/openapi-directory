package operations

import (
"openapi/pkg/models/shared")

type PublishAttractionHeaders struct {
    TmpsCorrelationID string `header:"style=simple,explode=false,name=TMPS-Correlation-Id"`
    
}

type PublishAttractionRequest struct {
    Headers PublishAttractionHeaders 
    Request shared.Attraction `request:"mediaType=application/json"`
    
}

type PublishAttractionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

