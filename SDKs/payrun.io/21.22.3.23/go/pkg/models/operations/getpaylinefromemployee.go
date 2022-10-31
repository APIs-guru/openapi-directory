package operations

import (
"openapi/pkg/models/shared")

type GetPayLineFromEmployeePathParams struct {
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayLineID string `pathParam:"style=simple,explode=false,name=PayLineId"`
    
}

type GetPayLineFromEmployeeHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPayLineFromEmployeeRequest struct {
    PathParams GetPayLineFromEmployeePathParams 
    Headers GetPayLineFromEmployeeHeaders 
    
}

type GetPayLineFromEmployeeResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    PayLine *shared.PayLine 
    StatusCode int64 
    
}

