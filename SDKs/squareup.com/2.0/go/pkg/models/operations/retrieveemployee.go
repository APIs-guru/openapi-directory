package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=employee_id"`
}

type RetrieveEmployeeSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveEmployeeRequest struct {
	PathParams RetrieveEmployeePathParams
	Security   RetrieveEmployeeSecurity
}

type RetrieveEmployeeResponse struct {
	ContentType string
	StatusCode  int64
	V1Employee  *shared.V1Employee
}
