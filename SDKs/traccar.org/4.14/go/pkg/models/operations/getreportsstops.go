package operations

import (
"time"
"openapi/pkg/models/shared")

type GetReportsStopsQueryParams struct {
    DeviceID []int64 `queryParam:"style=form,explode=true,name=deviceId"`
    From time.Time `queryParam:"style=form,explode=true,name=from"`
    GroupID []int64 `queryParam:"style=form,explode=true,name=groupId"`
    To time.Time `queryParam:"style=form,explode=true,name=to"`
    
}

type GetReportsStopsRequest struct {
    QueryParams GetReportsStopsQueryParams 
    
}

type GetReportsStopsResponse struct {
    Body []byte 
    ContentType string 
    ReportStops []shared.ReportStops 
    StatusCode int64 
    
}

