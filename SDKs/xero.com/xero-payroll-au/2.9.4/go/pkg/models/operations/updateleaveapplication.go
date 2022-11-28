package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLeaveApplicationPathParams struct {
	LeaveApplicationID string `pathParam:"style=simple,explode=false,name=LeaveApplicationID"`
}

type UpdateLeaveApplicationHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
}

type UpdateLeaveApplicationSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateLeaveApplicationRequest struct {
	PathParams UpdateLeaveApplicationPathParams
	Headers    UpdateLeaveApplicationHeaders
	Request    []shared.LeaveApplicationInput `request:"mediaType=application/json"`
	Security   UpdateLeaveApplicationSecurity
}

type UpdateLeaveApplicationResponse struct {
	ContentType       string
	LeaveApplications *shared.LeaveApplications
	StatusCode        int64
}
