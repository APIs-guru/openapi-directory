package operations

import (
"openapi/pkg/models/shared")

type UpdateEmployeePathParams struct {
    CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
    
}

type UpdateEmployeeSecurity struct {
    PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
    
}

type UpdateEmployeeRequest struct {
    PathParams UpdateEmployeePathParams 
    Request shared.Employee `request:"mediaType=application/json"`
    Security UpdateEmployeeSecurity 
    
}

type UpdateEmployeeResponse struct {
    ContentType string 
    StatusCode int64 
    Errors []shared.Error 
    
}

