package operations

import (
"openapi/pkg/models/shared")

type GetCompanyEmployeesEmployeeIDPathParams struct {
    EmployeeID int32 `pathParam:"style=simple,explode=false,name=employee_id"`
    
}

type GetCompanyEmployeesEmployeeIDRequest struct {
    PathParams GetCompanyEmployeesEmployeeIDPathParams 
    
}

type GetCompanyEmployeesEmployeeIDResponse struct {
    ContentType string 
    EmployeeResponse *shared.EmployeeResponse 
    StatusCode int64 
    
}

