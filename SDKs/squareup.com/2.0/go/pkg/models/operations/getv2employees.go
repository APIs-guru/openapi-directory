package operations

import (
	"openapi/pkg/models/shared"
)

type GetV2EmployeesQueryParams struct {
	Cursor     *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	LocationID *string `queryParam:"style=form,explode=true,name=location_id"`
	Status     *string `queryParam:"style=form,explode=true,name=status"`
}

type GetV2EmployeesSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetV2EmployeesRequest struct {
	QueryParams GetV2EmployeesQueryParams
	Security    GetV2EmployeesSecurity
}

type GetV2EmployeesResponse struct {
	ContentType           string
	ListEmployeesResponse *shared.ListEmployeesResponse
	StatusCode            int64
}
