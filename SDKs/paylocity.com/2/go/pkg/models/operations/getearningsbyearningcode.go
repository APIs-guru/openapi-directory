package operations

import (
	"openapi/pkg/models/shared"
)

type GetEarningsByEarningCodePathParams struct {
	CompanyID   string `pathParam:"style=simple,explode=false,name=companyId"`
	EarningCode string `pathParam:"style=simple,explode=false,name=earningCode"`
	EmployeeID  string `pathParam:"style=simple,explode=false,name=employeeId"`
}

type GetEarningsByEarningCodeSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type GetEarningsByEarningCodeRequest struct {
	PathParams GetEarningsByEarningCodePathParams
	Security   GetEarningsByEarningCodeSecurity
}

type GetEarningsByEarningCodeResponse struct {
	ContentType string
	StatusCode  int64
	Earnings    []shared.Earning
	Errors      []shared.Error
}
