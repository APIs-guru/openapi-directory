package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateRoleServerList = []string{
	"https://chat.twilio.com",
}

type UpdateRolePathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateRoleUpdateRoleRequest struct {
	Permission []string `form:"name=Permission"`
}

type UpdateRoleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateRoleRequest struct {
	ServerURL  *string
	PathParams UpdateRolePathParams
	Request    *UpdateRoleUpdateRoleRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateRoleSecurity
}

type UpdateRoleResponse struct {
	ContentType       string
	StatusCode        int64
	ChatV1ServiceRole *shared.ChatV1ServiceRole
}
