package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEmployeeRolePathParams struct {
	RoleID string `pathParam:"style=simple,explode=false,name=role_id"`
}

type UpdateEmployeeRoleSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type UpdateEmployeeRoleRequest struct {
	PathParams UpdateEmployeeRolePathParams
	Request    shared.V1EmployeeRole `request:"mediaType=application/json"`
	Security   UpdateEmployeeRoleSecurity
}

type UpdateEmployeeRoleResponse struct {
	ContentType    string
	StatusCode     int64
	V1EmployeeRole *shared.V1EmployeeRole
}
