package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLeaveApplicationHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
}

type CreateLeaveApplicationSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateLeaveApplicationRequest struct {
	Headers  CreateLeaveApplicationHeaders
	Request  []shared.LeaveApplicationInput `request:"mediaType=application/json"`
	Security CreateLeaveApplicationSecurity
}

type CreateLeaveApplicationResponse struct {
	ContentType       string
	LeaveApplications *shared.LeaveApplications
	StatusCode        int64
}
