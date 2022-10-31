package operations

import (
"openapi/pkg/models/shared")

type GetRtiTransactionFromEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    RtiTransactionID string `pathParam:"style=simple,explode=false,name=RtiTransactionId"`
    
}

type GetRtiTransactionFromEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetRtiTransactionFromEmployerRequest struct {
    PathParams GetRtiTransactionFromEmployerPathParams 
    Headers GetRtiTransactionFromEmployerHeaders 
    
}

type GetRtiTransactionFromEmployerResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    RtiTransactionBase *shared.RtiTransactionBase 
    StatusCode int64 
    
}

