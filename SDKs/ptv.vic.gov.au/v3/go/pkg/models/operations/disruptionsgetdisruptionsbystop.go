package operations

import (
"openapi/pkg/models/shared")

type DisruptionsGetDisruptionsByStopPathParams struct {
    StopID int32 `pathParam:"style=simple,explode=false,name=stop_id"`
    
}


type DisruptionsGetDisruptionsByStopDisruptionStatusEnum string

const (
    DisruptionsGetDisruptionsByStopDisruptionStatusEnumCurrent DisruptionsGetDisruptionsByStopDisruptionStatusEnum = "current"
DisruptionsGetDisruptionsByStopDisruptionStatusEnumPlanned DisruptionsGetDisruptionsByStopDisruptionStatusEnum = "planned"
)


type DisruptionsGetDisruptionsByStopQueryParams struct {
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    DisruptionStatus *DisruptionsGetDisruptionsByStopDisruptionStatusEnum `queryParam:"style=form,explode=true,name=disruption_status"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type DisruptionsGetDisruptionsByStopRequest struct {
    PathParams DisruptionsGetDisruptionsByStopPathParams 
    QueryParams DisruptionsGetDisruptionsByStopQueryParams 
    
}

type DisruptionsGetDisruptionsByStopResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3DisruptionsResponse *shared.V3DisruptionsResponse 
    V3ErrorResponse *shared.V3ErrorResponse 
    
}

