package operations

import (
"openapi/pkg/models/shared")

type GetAllEarningsPathParams struct {
    CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
    
}

type GetAllEarningsSecurity struct {
    PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
    
}

type GetAllEarningsRequest struct {
    PathParams GetAllEarningsPathParams 
    Security GetAllEarningsSecurity 
    
}

type GetAllEarningsResponse struct {
    ContentType string 
    StatusCode int64 
    Earnings []shared.Earning 
    Errors []shared.Error 
    
}

