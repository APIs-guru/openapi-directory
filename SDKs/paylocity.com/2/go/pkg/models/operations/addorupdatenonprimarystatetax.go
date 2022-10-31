package operations

import (
"openapi/pkg/models/shared")

type AddOrUpdateNonPrimaryStateTaxPathParams struct {
    CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
    
}

type AddOrUpdateNonPrimaryStateTaxSecurity struct {
    PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
    
}

type AddOrUpdateNonPrimaryStateTaxRequest struct {
    PathParams AddOrUpdateNonPrimaryStateTaxPathParams 
    Request shared.NonPrimaryStateTax `request:"mediaType=application/json"`
    Security AddOrUpdateNonPrimaryStateTaxSecurity 
    
}

type AddOrUpdateNonPrimaryStateTaxResponse struct {
    ContentType string 
    StatusCode int64 
    Errors []shared.Error 
    
}

