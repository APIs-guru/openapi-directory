package operations

import (
"openapi/pkg/models/shared")

type GetEarningByEarningCodeAndStartDatePathParams struct {
    CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
    EarningCode string `pathParam:"style=simple,explode=false,name=earningCode"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
    StartDate string `pathParam:"style=simple,explode=false,name=startDate"`
    
}

type GetEarningByEarningCodeAndStartDateSecurity struct {
    PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
    
}

type GetEarningByEarningCodeAndStartDateRequest struct {
    PathParams GetEarningByEarningCodeAndStartDatePathParams 
    Security GetEarningByEarningCodeAndStartDateSecurity 
    
}

type GetEarningByEarningCodeAndStartDateResponse struct {
    ContentType string 
    StatusCode int64 
    Earning *shared.Earning 
    Errors []shared.Error 
    
}

