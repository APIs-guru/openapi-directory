package operations

import (
"openapi/pkg/models/shared")

type GetP11SummaryReportOutputQueryParams struct {
    EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
    MaxIndex *string `queryParam:"style=form,explode=true,name=MaxIndex"`
    PayScheduleKey string `queryParam:"style=form,explode=true,name=PayScheduleKey"`
    StartIndex *string `queryParam:"style=form,explode=true,name=StartIndex"`
    TaxYear string `queryParam:"style=form,explode=true,name=TaxYear"`
    
}

type GetP11SummaryReportOutputHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetP11SummaryReportOutputRequest struct {
    QueryParams GetP11SummaryReportOutputQueryParams 
    Headers GetP11SummaryReportOutputHeaders 
    
}

type GetP11SummaryReportOutputResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    GetP11SummaryReportOutput200ApplicationJSONBinaryString []byte 
    StatusCode int64 
    
}

