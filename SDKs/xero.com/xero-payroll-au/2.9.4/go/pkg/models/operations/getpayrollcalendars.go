package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayrollCalendarsQueryParams struct {
	Order *string `queryParam:"style=form,explode=true,name=order"`
	Page  *int64  `queryParam:"style=form,explode=true,name=page"`
	Where *string `queryParam:"style=form,explode=true,name=where"`
}

type GetPayrollCalendarsHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
	XeroTenantID    string  `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
}

type GetPayrollCalendarsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetPayrollCalendarsRequest struct {
	QueryParams GetPayrollCalendarsQueryParams
	Headers     GetPayrollCalendarsHeaders
	Security    GetPayrollCalendarsSecurity
}

type GetPayrollCalendarsResponse struct {
	APIException     *shared.APIException
	ContentType      string
	PayrollCalendars *shared.PayrollCalendars
	StatusCode       int64
}
