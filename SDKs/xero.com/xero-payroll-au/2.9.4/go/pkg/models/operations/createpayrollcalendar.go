package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePayrollCalendarHeaders struct {
	XeroTenantID string `header:"name=Xero-Tenant-Id"`
}

type CreatePayrollCalendarSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreatePayrollCalendarRequest struct {
	Headers  CreatePayrollCalendarHeaders
	Request  []shared.PayrollCalendar `request:"mediaType=application/json"`
	Security CreatePayrollCalendarSecurity
}

type CreatePayrollCalendarResponse struct {
	ContentType      string
	PayrollCalendars *shared.PayrollCalendars
	StatusCode       int64
}
