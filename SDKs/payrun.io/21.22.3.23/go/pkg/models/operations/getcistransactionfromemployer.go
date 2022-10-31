package operations

import (
"openapi/pkg/models/shared")

type GetCisTransactionFromEmployerPathParams struct {
    CisTransactionID string `pathParam:"style=simple,explode=false,name=CisTransactionId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetCisTransactionFromEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetCisTransactionFromEmployerRequest struct {
    PathParams GetCisTransactionFromEmployerPathParams 
    Headers GetCisTransactionFromEmployerHeaders 
    
}

type GetCisTransactionFromEmployerResponse struct {
    CisTransaction *shared.CisTransaction 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

