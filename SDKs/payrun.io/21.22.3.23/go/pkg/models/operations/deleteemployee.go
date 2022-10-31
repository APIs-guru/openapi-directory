package operations

import (
"openapi/pkg/models/shared")

type DeleteEmployeePathParams struct {
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type DeleteEmployeeHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type DeleteEmployeeRequest struct {
    PathParams DeleteEmployeePathParams 
    Headers DeleteEmployeeHeaders 
    
}

type DeleteEmployeeResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

