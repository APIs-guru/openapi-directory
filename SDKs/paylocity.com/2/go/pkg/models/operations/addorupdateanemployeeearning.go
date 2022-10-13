package operations

import (
	"openapi/pkg/models/shared"
)

type AddOrUpdateAnEmployeeEarningPathParams struct {
	CompanyID  string `pathParam:"style=simple,explode=false,name=companyId"`
	EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
}

type AddOrUpdateAnEmployeeEarningSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type AddOrUpdateAnEmployeeEarningRequest struct {
	PathParams AddOrUpdateAnEmployeeEarningPathParams
	Request    shared.Earning `request:"mediaType=application/json"`
	Security   AddOrUpdateAnEmployeeEarningSecurity
}

type AddOrUpdateAnEmployeeEarningResponse struct {
	ContentType string
	StatusCode  int64
	Errors      []shared.Error
}
