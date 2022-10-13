package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEarningByEarningCodeAndStartDatePathParams struct {
	CompanyID   string `pathParam:"style=simple,explode=false,name=companyId"`
	EarningCode string `pathParam:"style=simple,explode=false,name=earningCode"`
	EmployeeID  string `pathParam:"style=simple,explode=false,name=employeeId"`
	StartDate   string `pathParam:"style=simple,explode=false,name=startDate"`
}

type DeleteEarningByEarningCodeAndStartDateSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type DeleteEarningByEarningCodeAndStartDateRequest struct {
	PathParams DeleteEarningByEarningCodeAndStartDatePathParams
	Security   DeleteEarningByEarningCodeAndStartDateSecurity
}

type DeleteEarningByEarningCodeAndStartDateResponse struct {
	ContentType string
	StatusCode  int64
	Errors      []shared.Error
}
