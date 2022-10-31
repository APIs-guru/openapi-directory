package operations

import (
"openapi/pkg/models/shared")

type CreateEmployeeRoleSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateEmployeeRoleRequest struct {
    Request shared.V1EmployeeRole `request:"mediaType=application/json"`
    Security CreateEmployeeRoleSecurity 
    
}

type CreateEmployeeRoleResponse struct {
    ContentType string 
    StatusCode int64 
    V1EmployeeRole *shared.V1EmployeeRole 
    
}

