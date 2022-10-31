package operations

import (
"openapi/pkg/models/shared")

type GetEmployeeWagePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetEmployeeWageSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetEmployeeWageRequest struct {
    PathParams GetEmployeeWagePathParams 
    Security GetEmployeeWageSecurity 
    
}

type GetEmployeeWageResponse struct {
    ContentType string 
    GetEmployeeWageResponse *shared.GetEmployeeWageResponse 
    StatusCode int64 
    
}

