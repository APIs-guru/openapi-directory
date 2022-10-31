package operations

import (
"time"
"openapi/pkg/models/shared")

type GetReportsRouteQueryParams struct {
    DeviceID []int64 `queryParam:"style=form,explode=true,name=deviceId"`
    From time.Time `queryParam:"style=form,explode=true,name=from"`
    GroupID []int64 `queryParam:"style=form,explode=true,name=groupId"`
    To time.Time `queryParam:"style=form,explode=true,name=to"`
    
}

type GetReportsRouteRequest struct {
    QueryParams GetReportsRouteQueryParams 
    
}

type GetReportsRouteResponse struct {
    Body []byte 
    ContentType string 
    Positions []shared.Position 
    StatusCode int64 
    
}

