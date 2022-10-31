package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=employee_id"`
}

type UpdateEmployeeSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type UpdateEmployeeRequest struct {
	PathParams UpdateEmployeePathParams
	Request    shared.V1Employee `request:"mediaType=application/json"`
	Security   UpdateEmployeeSecurity
}

type UpdateEmployeeResponse struct {
	ContentType string
	StatusCode  int64
	V1Employee  *shared.V1Employee
}
