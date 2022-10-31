package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllLocalTaxesPathParams struct {
	CompanyID  string `pathParam:"style=simple,explode=false,name=companyId"`
	EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
}

type GetAllLocalTaxesSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type GetAllLocalTaxesRequest struct {
	PathParams GetAllLocalTaxesPathParams
	Security   GetAllLocalTaxesSecurity
}

type GetAllLocalTaxesResponse struct {
	ContentType string
	StatusCode  int64
	Errors      []shared.Error
	LocalTaxes  []shared.LocalTax
}
