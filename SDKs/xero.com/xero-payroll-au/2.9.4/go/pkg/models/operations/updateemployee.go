package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeID"`
}

type UpdateEmployeeHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
}

type UpdateEmployeeSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateEmployeeRequest struct {
	PathParams UpdateEmployeePathParams
	Headers    UpdateEmployeeHeaders
	Request    []shared.EmployeeInput `request:"mediaType=application/json"`
	Security   UpdateEmployeeSecurity
}

type UpdateEmployeeResponse struct {
	ContentType string
	Employees   *shared.Employees
	StatusCode  int64
}
