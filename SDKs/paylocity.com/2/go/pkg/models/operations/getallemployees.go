package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllEmployeesPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetAllEmployeesQueryParams struct {
	Includetotalcount *bool  `queryParam:"style=form,explode=true,name=includetotalcount"`
	Pagenumber        *int64 `queryParam:"style=form,explode=true,name=pagenumber"`
	Pagesize          *int64 `queryParam:"style=form,explode=true,name=pagesize"`
}

type GetAllEmployeesSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type GetAllEmployeesRequest struct {
	PathParams  GetAllEmployeesPathParams
	QueryParams GetAllEmployeesQueryParams
	Security    GetAllEmployeesSecurity
}

type GetAllEmployeesResponse struct {
	ContentType   string
	StatusCode    int64
	EmployeeInfos []shared.EmployeeInfo
	Errors        []shared.Error
}
