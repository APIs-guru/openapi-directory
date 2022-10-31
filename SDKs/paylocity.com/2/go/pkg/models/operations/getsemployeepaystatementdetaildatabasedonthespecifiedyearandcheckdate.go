package operations

import (
	"openapi/pkg/models/shared"
)

type GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams struct {
	CheckDate  string `pathParam:"style=simple,explode=false,name=checkDate"`
	CompanyID  string `pathParam:"style=simple,explode=false,name=companyId"`
	EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
	Year       string `pathParam:"style=simple,explode=false,name=year"`
}

type GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams struct {
	Dettypes          *string `queryParam:"style=form,explode=true,name=dettypes"`
	Includetotalcount *bool   `queryParam:"style=form,explode=true,name=includetotalcount"`
	Pagenumber        *int64  `queryParam:"style=form,explode=true,name=pagenumber"`
	Pagesize          *int64  `queryParam:"style=form,explode=true,name=pagesize"`
}

type GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest struct {
	PathParams  GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams
	QueryParams GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams
	Security    GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity
}

type GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse struct {
	ContentType         string
	StatusCode          int64
	Errors              []shared.Error
	PayStatementDetails []shared.PayStatementDetails
}
