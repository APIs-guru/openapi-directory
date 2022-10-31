package operations

import (
"openapi/pkg/models/shared")

type GetAoeLiabilityReportOuputQueryParams struct {
    EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
    PayScheduleKey string `queryParam:"style=form,explode=true,name=PayScheduleKey"`
    TaxPeriod *string `queryParam:"style=form,explode=true,name=TaxPeriod"`
    TaxYear string `queryParam:"style=form,explode=true,name=TaxYear"`
    TransformDefinitionKey *string `queryParam:"style=form,explode=true,name=TransformDefinitionKey"`
    
}

type GetAoeLiabilityReportOuputHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetAoeLiabilityReportOuputRequest struct {
    QueryParams GetAoeLiabilityReportOuputQueryParams 
    Headers GetAoeLiabilityReportOuputHeaders 
    
}

type GetAoeLiabilityReportOuputResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    GetAoeLiabilityReportOuput200ApplicationJSONBinaryString []byte 
    StatusCode int64 
    
}

