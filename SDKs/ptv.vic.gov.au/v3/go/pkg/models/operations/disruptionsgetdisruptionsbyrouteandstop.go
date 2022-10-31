package operations

import (
"openapi/pkg/models/shared")

type DisruptionsGetDisruptionsByRouteAndStopPathParams struct {
    RouteID int32 `pathParam:"style=simple,explode=false,name=route_id"`
    StopID int32 `pathParam:"style=simple,explode=false,name=stop_id"`
    
}


type DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum string

const (
    DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnumCurrent DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum = "current"
DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnumPlanned DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum = "planned"
)


type DisruptionsGetDisruptionsByRouteAndStopQueryParams struct {
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    DisruptionStatus *DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum `queryParam:"style=form,explode=true,name=disruption_status"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type DisruptionsGetDisruptionsByRouteAndStopRequest struct {
    PathParams DisruptionsGetDisruptionsByRouteAndStopPathParams 
    QueryParams DisruptionsGetDisruptionsByRouteAndStopQueryParams 
    
}

type DisruptionsGetDisruptionsByRouteAndStopResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3DisruptionsResponse *shared.V3DisruptionsResponse 
    V3ErrorResponse *shared.V3ErrorResponse 
    
}

