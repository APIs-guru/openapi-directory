package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployeesQueryParams struct {
	Order *string `queryParam:"style=form,explode=true,name=order"`
	Page  *int64  `queryParam:"style=form,explode=true,name=page"`
	Where *string `queryParam:"style=form,explode=true,name=where"`
}

type GetEmployeesHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	XeroTenantID    string  `header:"name=Xero-Tenant-Id"`
}

type GetEmployeesSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetEmployeesRequest struct {
	QueryParams GetEmployeesQueryParams
	Headers     GetEmployeesHeaders
	Security    GetEmployeesSecurity
}

type GetEmployeesResponse struct {
	APIException *shared.APIException
	ContentType  string
	Employees    *shared.Employees
	StatusCode   int64
}
