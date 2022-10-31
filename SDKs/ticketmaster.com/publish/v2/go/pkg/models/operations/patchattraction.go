package operations

import (
"openapi/pkg/models/shared")

type PatchAttractionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PatchAttractionHeaders struct {
    TmpsCorrelationID string `header:"style=simple,explode=false,name=TMPS-Correlation-Id"`
    
}

type PatchAttractionRequest struct {
    PathParams PatchAttractionPathParams 
    Headers PatchAttractionHeaders 
    Request shared.AugmentationData `request:"mediaType=application/json"`
    
}

type PatchAttractionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

