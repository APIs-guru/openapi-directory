package operations

import (
"time"
"openapi/pkg/models/shared")

type GetPositionsQueryParams struct {
    DeviceID *int64 `queryParam:"style=form,explode=true,name=deviceId"`
    From *time.Time `queryParam:"style=form,explode=true,name=from"`
    ID *int64 `queryParam:"style=form,explode=true,name=id"`
    To *time.Time `queryParam:"style=form,explode=true,name=to"`
    
}

type GetPositionsRequest struct {
    QueryParams GetPositionsQueryParams 
    
}

type GetPositionsResponse struct {
    Body []byte 
    ContentType string 
    Positions []shared.Position 
    StatusCode int64 
    
}

