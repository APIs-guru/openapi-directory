package operations

import (
	"openapi/pkg/models/shared"
)

type AddLocalTaxPathParams struct {
	CompanyID  string `pathParam:"style=simple,explode=false,name=companyId"`
	EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
}

type AddLocalTaxSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type AddLocalTaxRequest struct {
	PathParams AddLocalTaxPathParams
	Request    shared.LocalTax `request:"mediaType=application/json"`
	Security   AddLocalTaxSecurity
}

type AddLocalTaxResponse struct {
	ContentType string
	StatusCode  int64
	Errors      []shared.Error
}
