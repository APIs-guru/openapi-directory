package operations

import (
"openapi/pkg/models/shared")

type GetPensionLiabilityReportOutputQueryParams struct {
    EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
    PensionKey string `queryParam:"style=form,explode=true,name=PensionKey"`
    TaxYear string `queryParam:"style=form,explode=true,name=TaxYear"`
    
}

type GetPensionLiabilityReportOutputHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPensionLiabilityReportOutputRequest struct {
    QueryParams GetPensionLiabilityReportOutputQueryParams 
    Headers GetPensionLiabilityReportOutputHeaders 
    
}

type GetPensionLiabilityReportOutputResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    GetPensionLiabilityReportOutput200ApplicationJSONBinaryString []byte 
    StatusCode int64 
    
}

