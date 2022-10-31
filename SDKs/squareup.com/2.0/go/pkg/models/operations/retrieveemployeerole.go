package operations

import (
"openapi/pkg/models/shared")

type RetrieveEmployeeRolePathParams struct {
    RoleID string `pathParam:"style=simple,explode=false,name=role_id"`
    
}

type RetrieveEmployeeRoleSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveEmployeeRoleRequest struct {
    PathParams RetrieveEmployeeRolePathParams 
    Security RetrieveEmployeeRoleSecurity 
    
}

type RetrieveEmployeeRoleResponse struct {
    ContentType string 
    StatusCode int64 
    V1EmployeeRole *shared.V1EmployeeRole 
    
}

