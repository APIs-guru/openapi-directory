package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeID"`
}

type GetEmployeeHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
}

type GetEmployeeSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetEmployeeRequest struct {
	PathParams GetEmployeePathParams
	Headers    GetEmployeeHeaders
	Security   GetEmployeeSecurity
}

type GetEmployeeResponse struct {
	ContentType string
	Employees   *shared.Employees
	StatusCode  int64
}
