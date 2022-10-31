package operations

import (
"openapi/pkg/models/shared")

type GetAllDirectDepositPathParams struct {
    CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
    
}

type GetAllDirectDepositSecurity struct {
    PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
    
}

type GetAllDirectDepositRequest struct {
    PathParams GetAllDirectDepositPathParams 
    Security GetAllDirectDepositSecurity 
    
}

type GetAllDirectDepositResponse struct {
    ContentType string 
    StatusCode int64 
    DirectDeposits []shared.DirectDeposit 
    Errors []shared.Error 
    
}

