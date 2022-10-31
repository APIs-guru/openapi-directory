package operations

import (
"openapi/pkg/models/shared")

type GetP60ReportOutputQueryParams struct {
    EmployeeCodes *string `queryParam:"style=form,explode=true,name=EmployeeCodes"`
    EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
    MaxIndex *string `queryParam:"style=form,explode=true,name=MaxIndex"`
    StartIndex *string `queryParam:"style=form,explode=true,name=StartIndex"`
    TaxYear string `queryParam:"style=form,explode=true,name=TaxYear"`
    TransformDefinitionKey *string `queryParam:"style=form,explode=true,name=TransformDefinitionKey"`
    
}

type GetP60ReportOutputHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetP60ReportOutputRequest struct {
    QueryParams GetP60ReportOutputQueryParams 
    Headers GetP60ReportOutputHeaders 
    
}

type GetP60ReportOutputResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    GetP60ReportOutput200ApplicationJSONBinaryString []byte 
    StatusCode int64 
    
}

