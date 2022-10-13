package operations

import (
	"openapi/pkg/models/shared"
)

type GetLeaveApplicationPathParams struct {
	LeaveApplicationID string `pathParam:"style=simple,explode=false,name=LeaveApplicationID"`
}

type GetLeaveApplicationHeaders struct {
	XeroTenantID string `header:"name=Xero-Tenant-Id"`
}

type GetLeaveApplicationSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetLeaveApplicationRequest struct {
	PathParams GetLeaveApplicationPathParams
	Headers    GetLeaveApplicationHeaders
	Security   GetLeaveApplicationSecurity
}

type GetLeaveApplicationResponse struct {
	ContentType       string
	LeaveApplications *shared.LeaveApplications
	StatusCode        int64
}
