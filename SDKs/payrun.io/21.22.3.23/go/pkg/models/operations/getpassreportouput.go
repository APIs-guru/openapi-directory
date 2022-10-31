package operations

import (
"time"
"openapi/pkg/models/shared")

type GetPassReportOuputQueryParams struct {
    DocumentID string `queryParam:"style=form,explode=true,name=DocumentId"`
    EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
    IntermediaryID string `queryParam:"style=form,explode=true,name=IntermediaryId"`
    MessageFunctionCode string `queryParam:"style=form,explode=true,name=MessageFunctionCode"`
    PayScheduleKey string `queryParam:"style=form,explode=true,name=PayScheduleKey"`
    PaymentDate *time.Time `queryParam:"style=form,explode=true,name=PaymentDate"`
    PensionKey string `queryParam:"style=form,explode=true,name=PensionKey"`
    TaxYear string `queryParam:"style=form,explode=true,name=TaxYear"`
    
}

type GetPassReportOuputHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPassReportOuputRequest struct {
    QueryParams GetPassReportOuputQueryParams 
    Headers GetPassReportOuputHeaders 
    
}

type GetPassReportOuputResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    GetPassReportOuput200ApplicationJSONBinaryString []byte 
    StatusCode int64 
    
}

