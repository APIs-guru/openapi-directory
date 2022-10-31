package operations

import (
"openapi/pkg/models/shared")

type GetV2EmployeesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetV2EmployeesIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetV2EmployeesIDRequest struct {
    PathParams GetV2EmployeesIDPathParams 
    Security GetV2EmployeesIDSecurity 
    
}

type GetV2EmployeesIDResponse struct {
    ContentType string 
    RetrieveEmployeeResponse *shared.RetrieveEmployeeResponse 
    StatusCode int64 
    
}

