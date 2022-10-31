package operations

import (
"openapi/pkg/models/shared")

type GetCisLineTypeFromEmployerPathParams struct {
    CisLineTypeID string `pathParam:"style=simple,explode=false,name=CisLineTypeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetCisLineTypeFromEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetCisLineTypeFromEmployerRequest struct {
    PathParams GetCisLineTypeFromEmployerPathParams 
    Headers GetCisLineTypeFromEmployerHeaders 
    
}

type GetCisLineTypeFromEmployerResponse struct {
    CisLineType *shared.CisLineType 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

