package operations

import (
"openapi/pkg/models/shared")

type LineTimetablePathParams struct {
    FromStopPointID string `pathParam:"style=simple,explode=false,name=fromStopPointId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type LineTimetableRequest struct {
    PathParams LineTimetablePathParams 
    
}

type LineTimetableResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesTimetableResponse *shared.TflAPIPresentationEntitiesTimetableResponse 
    
}

