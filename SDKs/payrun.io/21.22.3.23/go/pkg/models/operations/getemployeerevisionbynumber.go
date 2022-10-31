package operations

import (
"openapi/pkg/models/shared")

type GetEmployeeRevisionByNumberPathParams struct {
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    RevisionNumber string `pathParam:"style=simple,explode=false,name=RevisionNumber"`
    
}

type GetEmployeeRevisionByNumberHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetEmployeeRevisionByNumberRequest struct {
    PathParams GetEmployeeRevisionByNumberPathParams 
    Headers GetEmployeeRevisionByNumberHeaders 
    
}

type GetEmployeeRevisionByNumberResponse struct {
    ContentType string 
    Employee *shared.Employee 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

