package operations

import (
"openapi/pkg/models/shared")

type GetP45ReportOutputQueryParams struct {
    EmployeeKey string `queryParam:"style=form,explode=true,name=EmployeeKey"`
    EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
    TransformDefinitionKey *string `queryParam:"style=form,explode=true,name=TransformDefinitionKey"`
    
}

type GetP45ReportOutputHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetP45ReportOutputRequest struct {
    QueryParams GetP45ReportOutputQueryParams 
    Headers GetP45ReportOutputHeaders 
    
}

type GetP45ReportOutputResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    GetP45ReportOutput200ApplicationJSONBinaryString []byte 
    StatusCode int64 
    
}

