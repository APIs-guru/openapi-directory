package operations

import (
	"openapi/pkg/models/shared"
)

type GetTimesheetsQueryParams struct {
	Order *string `queryParam:"style=form,explode=true,name=order"`
	Page  *int64  `queryParam:"style=form,explode=true,name=page"`
	Where *string `queryParam:"style=form,explode=true,name=where"`
}

type GetTimesheetsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	XeroTenantID    string  `header:"name=Xero-Tenant-Id"`
}

type GetTimesheetsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetTimesheetsRequest struct {
	QueryParams GetTimesheetsQueryParams
	Headers     GetTimesheetsHeaders
	Security    GetTimesheetsSecurity
}

type GetTimesheetsResponse struct {
	APIException *shared.APIException
	ContentType  string
	StatusCode   int64
	Timesheets   *shared.Timesheets
}
