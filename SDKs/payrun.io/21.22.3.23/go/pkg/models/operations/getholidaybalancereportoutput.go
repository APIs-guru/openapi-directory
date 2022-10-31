package operations

import (
"time"
"openapi/pkg/models/shared")

type GetHolidayBalanceReportOutputQueryParams struct {
    EmployeeCodes *string `queryParam:"style=form,explode=true,name=EmployeeCodes"`
    EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
    HolidayYearEnd time.Time `queryParam:"style=form,explode=true,name=HolidayYearEnd"`
    MaxIndex *string `queryParam:"style=form,explode=true,name=MaxIndex"`
    StartIndex *string `queryParam:"style=form,explode=true,name=StartIndex"`
    
}

type GetHolidayBalanceReportOutputHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetHolidayBalanceReportOutputRequest struct {
    QueryParams GetHolidayBalanceReportOutputQueryParams 
    Headers GetHolidayBalanceReportOutputHeaders 
    
}

type GetHolidayBalanceReportOutputResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    GetHolidayBalanceReportOutput200ApplicationJSONBinaryString []byte 
    StatusCode int64 
    
}

