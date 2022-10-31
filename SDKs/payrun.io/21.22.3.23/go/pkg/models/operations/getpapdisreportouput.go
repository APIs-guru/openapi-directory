package operations

import (
"time"
"openapi/pkg/models/shared")

type GetPapdisReportOuputQueryParams struct {
    EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
    MessageFunctionCode string `queryParam:"style=form,explode=true,name=MessageFunctionCode"`
    PayScheduleKey string `queryParam:"style=form,explode=true,name=PayScheduleKey"`
    PaymentDate *time.Time `queryParam:"style=form,explode=true,name=PaymentDate"`
    PensionKey string `queryParam:"style=form,explode=true,name=PensionKey"`
    TaxYear string `queryParam:"style=form,explode=true,name=TaxYear"`
    TransformDefinitionKey *string `queryParam:"style=form,explode=true,name=TransformDefinitionKey"`
    
}

type GetPapdisReportOuputHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPapdisReportOuputRequest struct {
    QueryParams GetPapdisReportOuputQueryParams 
    Headers GetPapdisReportOuputHeaders 
    
}

type GetPapdisReportOuputResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    GetPapdisReportOuput200ApplicationJSONBinaryString []byte 
    StatusCode int64 
    
}

