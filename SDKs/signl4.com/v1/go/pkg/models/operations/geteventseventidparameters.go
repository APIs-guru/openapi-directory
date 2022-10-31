package operations

import (
"openapi/pkg/models/shared")

type GetEventsEventIDParametersPathParams struct {
    EventID string `pathParam:"style=simple,explode=false,name=eventId"`
    
}

type GetEventsEventIDParametersRequest struct {
    PathParams GetEventsEventIDParametersPathParams 
    
}

type GetEventsEventIDParametersResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    EventParameterInfos []shared.EventParameterInfo 
    StatusCode int64 
    
}

