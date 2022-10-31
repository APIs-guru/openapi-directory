package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEmployeeHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
}

type CreateEmployeeSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateEmployeeRequest struct {
	Headers  CreateEmployeeHeaders
	Request  []shared.Employee `request:"mediaType=application/json"`
	Security CreateEmployeeSecurity
}

type CreateEmployeeResponse struct {
	ContentType string
	Employees   *shared.Employees
	StatusCode  int64
}
