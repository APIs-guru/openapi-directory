package operations

import (
"time"
"openapi/pkg/models/shared")

type GetReportsTripsQueryParams struct {
    DeviceID []int64 `queryParam:"style=form,explode=true,name=deviceId"`
    From time.Time `queryParam:"style=form,explode=true,name=from"`
    GroupID []int64 `queryParam:"style=form,explode=true,name=groupId"`
    To time.Time `queryParam:"style=form,explode=true,name=to"`
    
}

type GetReportsTripsRequest struct {
    QueryParams GetReportsTripsQueryParams 
    
}

type GetReportsTripsResponse struct {
    Body []byte 
    ContentType string 
    ReportTrips []shared.ReportTrips 
    StatusCode int64 
    
}

