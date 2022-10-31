package operations

import (
"openapi/pkg/models/shared")

type ListEmployeeWagesQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    EmployeeID *string `queryParam:"style=form,explode=true,name=employee_id"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type ListEmployeeWagesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListEmployeeWagesRequest struct {
    QueryParams ListEmployeeWagesQueryParams 
    Security ListEmployeeWagesSecurity 
    
}

type ListEmployeeWagesResponse struct {
    ContentType string 
    ListEmployeeWagesResponse *shared.ListEmployeeWagesResponse 
    StatusCode int64 
    
}

