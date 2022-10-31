package operations

import (
"openapi/pkg/models/shared")

type PatchVenuePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PatchVenueHeaders struct {
    TmpsCorrelationID string `header:"style=simple,explode=false,name=TMPS-Correlation-Id"`
    
}

type PatchVenueRequest struct {
    PathParams PatchVenuePathParams 
    Headers PatchVenueHeaders 
    Request shared.AugmentationData `request:"mediaType=application/json"`
    
}

type PatchVenueResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

