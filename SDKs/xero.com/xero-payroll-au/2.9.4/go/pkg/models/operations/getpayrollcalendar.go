package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayrollCalendarPathParams struct {
	PayrollCalendarID string `pathParam:"style=simple,explode=false,name=PayrollCalendarID"`
}

type GetPayrollCalendarHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
}

type GetPayrollCalendarSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetPayrollCalendarRequest struct {
	PathParams GetPayrollCalendarPathParams
	Headers    GetPayrollCalendarHeaders
	Security   GetPayrollCalendarSecurity
}

type GetPayrollCalendarResponse struct {
	APIException     *shared.APIException
	ContentType      string
	PayrollCalendars *shared.PayrollCalendars
	StatusCode       int64
}
