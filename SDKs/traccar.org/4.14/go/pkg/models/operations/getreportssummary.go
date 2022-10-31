package operations

import (
"time"
"openapi/pkg/models/shared")

type GetReportsSummaryQueryParams struct {
    DeviceID []int64 `queryParam:"style=form,explode=true,name=deviceId"`
    From time.Time `queryParam:"style=form,explode=true,name=from"`
    GroupID []int64 `queryParam:"style=form,explode=true,name=groupId"`
    To time.Time `queryParam:"style=form,explode=true,name=to"`
    
}

type GetReportsSummaryRequest struct {
    QueryParams GetReportsSummaryQueryParams 
    
}

type GetReportsSummaryResponse struct {
    Body []byte 
    ContentType string 
    ReportSummaries []shared.ReportSummary 
    StatusCode int64 
    
}

