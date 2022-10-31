package operations

import (
"openapi/pkg/models/shared")

type PublishEventHeaders struct {
    TmpsCorrelationID string `header:"style=simple,explode=false,name=TMPS-Correlation-Id"`
    
}

type PublishEventRequest struct {
    Headers PublishEventHeaders 
    Request shared.Event `request:"mediaType=application/json"`
    
}

type PublishEventResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

