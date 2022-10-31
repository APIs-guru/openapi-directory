package operations

import (
"openapi/pkg/models/shared")

type GetNextPayPeriodDatesReportOutputQueryParams struct {
    EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
    PayScheduleKey string `queryParam:"style=form,explode=true,name=PayScheduleKey"`
    
}

type GetNextPayPeriodDatesReportOutputHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetNextPayPeriodDatesReportOutputRequest struct {
    QueryParams GetNextPayPeriodDatesReportOutputQueryParams 
    Headers GetNextPayPeriodDatesReportOutputHeaders 
    
}

type GetNextPayPeriodDatesReportOutputResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    GetNextPayPeriodDatesReportOutput200ApplicationJSONBinaryString []byte 
    StatusCode int64 
    
}

