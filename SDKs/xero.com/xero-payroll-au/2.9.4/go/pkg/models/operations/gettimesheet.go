package operations

import (
	"openapi/pkg/models/shared"
)

type GetTimesheetPathParams struct {
	TimesheetID string `pathParam:"style=simple,explode=false,name=TimesheetID"`
}

type GetTimesheetHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
}

type GetTimesheetSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetTimesheetRequest struct {
	PathParams GetTimesheetPathParams
	Headers    GetTimesheetHeaders
	Security   GetTimesheetSecurity
}

type GetTimesheetResponse struct {
	ContentType     string
	StatusCode      int64
	TimesheetObject *shared.TimesheetObject
}
