package operations

import (
"openapi/pkg/models/shared")


type DisruptionsGetAllDisruptionsDisruptionStatusEnum string

const (
    DisruptionsGetAllDisruptionsDisruptionStatusEnumCurrent DisruptionsGetAllDisruptionsDisruptionStatusEnum = "current"
DisruptionsGetAllDisruptionsDisruptionStatusEnumPlanned DisruptionsGetAllDisruptionsDisruptionStatusEnum = "planned"
)


type DisruptionsGetAllDisruptionsQueryParams struct {
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    DisruptionModes []int32 `queryParam:"style=form,explode=true,name=disruption_modes"`
    DisruptionStatus *DisruptionsGetAllDisruptionsDisruptionStatusEnum `queryParam:"style=form,explode=true,name=disruption_status"`
    RouteTypes []int32 `queryParam:"style=form,explode=true,name=route_types"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type DisruptionsGetAllDisruptionsRequest struct {
    QueryParams DisruptionsGetAllDisruptionsQueryParams 
    
}

type DisruptionsGetAllDisruptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3DisruptionsResponse *shared.V3DisruptionsResponse 
    V3ErrorResponse *shared.V3ErrorResponse 
    
}

