package operations

import (
"openapi/pkg/models/shared")

type GetLocalTaxByTaxCodePathParams struct {
    CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
    TaxCode string `pathParam:"style=simple,explode=false,name=taxCode"`
    
}

type GetLocalTaxByTaxCodeSecurity struct {
    PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
    
}

type GetLocalTaxByTaxCodeRequest struct {
    PathParams GetLocalTaxByTaxCodePathParams 
    Security GetLocalTaxByTaxCodeSecurity 
    
}

type GetLocalTaxByTaxCodeResponse struct {
    ContentType string 
    StatusCode int64 
    Errors []shared.Error 
    LocalTaxes []shared.LocalTax 
    
}

