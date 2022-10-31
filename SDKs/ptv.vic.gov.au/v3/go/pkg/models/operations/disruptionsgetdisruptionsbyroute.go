package operations

import (
"openapi/pkg/models/shared")

type DisruptionsGetDisruptionsByRoutePathParams struct {
    RouteID int32 `pathParam:"style=simple,explode=false,name=route_id"`
    
}


type DisruptionsGetDisruptionsByRouteDisruptionStatusEnum string

const (
    DisruptionsGetDisruptionsByRouteDisruptionStatusEnumCurrent DisruptionsGetDisruptionsByRouteDisruptionStatusEnum = "current"
DisruptionsGetDisruptionsByRouteDisruptionStatusEnumPlanned DisruptionsGetDisruptionsByRouteDisruptionStatusEnum = "planned"
)


type DisruptionsGetDisruptionsByRouteQueryParams struct {
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    DisruptionStatus *DisruptionsGetDisruptionsByRouteDisruptionStatusEnum `queryParam:"style=form,explode=true,name=disruption_status"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type DisruptionsGetDisruptionsByRouteRequest struct {
    PathParams DisruptionsGetDisruptionsByRoutePathParams 
    QueryParams DisruptionsGetDisruptionsByRouteQueryParams 
    
}

type DisruptionsGetDisruptionsByRouteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3DisruptionsResponse *shared.V3DisruptionsResponse 
    V3ErrorResponse *shared.V3ErrorResponse 
    
}

