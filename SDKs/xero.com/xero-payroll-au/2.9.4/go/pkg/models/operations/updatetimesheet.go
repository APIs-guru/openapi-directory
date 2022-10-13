package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTimesheetPathParams struct {
	TimesheetID string `pathParam:"style=simple,explode=false,name=TimesheetID"`
}

type UpdateTimesheetHeaders struct {
	XeroTenantID string `header:"name=Xero-Tenant-Id"`
}

type UpdateTimesheetSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateTimesheetRequest struct {
	PathParams UpdateTimesheetPathParams
	Headers    UpdateTimesheetHeaders
	Request    []shared.Timesheet `request:"mediaType=application/json"`
	Security   UpdateTimesheetSecurity
}

type UpdateTimesheetResponse struct {
	ContentType string
	StatusCode  int64
	Timesheets  *shared.Timesheets
}
