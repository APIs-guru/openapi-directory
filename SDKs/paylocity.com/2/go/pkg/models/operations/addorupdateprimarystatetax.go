package operations

import (
"openapi/pkg/models/shared")

type AddOrUpdatePrimaryStateTaxPathParams struct {
    CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
    
}

type AddOrUpdatePrimaryStateTaxSecurity struct {
    PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
    
}

type AddOrUpdatePrimaryStateTaxRequest struct {
    PathParams AddOrUpdatePrimaryStateTaxPathParams 
    Request shared.StateTax `request:"mediaType=application/json"`
    Security AddOrUpdatePrimaryStateTaxSecurity 
    
}

type AddOrUpdatePrimaryStateTaxResponse struct {
    ContentType string 
    StatusCode int64 
    Errors []shared.Error 
    
}

