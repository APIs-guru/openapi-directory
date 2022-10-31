package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLocalTaxByTaxCodePathParams struct {
	CompanyID  string `pathParam:"style=simple,explode=false,name=companyId"`
	EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
	TaxCode    string `pathParam:"style=simple,explode=false,name=taxCode"`
}

type DeleteLocalTaxByTaxCodeSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type DeleteLocalTaxByTaxCodeRequest struct {
	PathParams DeleteLocalTaxByTaxCodePathParams
	Security   DeleteLocalTaxByTaxCodeSecurity
}

type DeleteLocalTaxByTaxCodeResponse struct {
	ContentType string
	StatusCode  int64
	Errors      []shared.Error
}
