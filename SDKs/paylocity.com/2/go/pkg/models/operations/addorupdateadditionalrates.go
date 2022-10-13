package operations

import (
	"openapi/pkg/models/shared"
)

type AddOrUpdateAdditionalRatesPathParams struct {
	CompanyID  string `pathParam:"style=simple,explode=false,name=companyId"`
	EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
}

type AddOrUpdateAdditionalRatesSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type AddOrUpdateAdditionalRatesRequest struct {
	PathParams AddOrUpdateAdditionalRatesPathParams
	Request    shared.AdditionalRate `request:"mediaType=application/json"`
	Security   AddOrUpdateAdditionalRatesSecurity
}

type AddOrUpdateAdditionalRatesResponse struct {
	ContentType string
	StatusCode  int64
	Errors      []shared.Error
}
