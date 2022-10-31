package operations

import (
"openapi/pkg/models/shared")

type LineStopPointsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type LineStopPointsQueryParams struct {
    TflOperatedNationalRailStationsOnly *bool `queryParam:"style=form,explode=true,name=tflOperatedNationalRailStationsOnly"`
    
}

type LineStopPointsRequest struct {
    PathParams LineStopPointsPathParams 
    QueryParams LineStopPointsQueryParams 
    
}

type LineStopPointsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesStopPoints []shared.TflAPIPresentationEntitiesStopPoint 
    
}

