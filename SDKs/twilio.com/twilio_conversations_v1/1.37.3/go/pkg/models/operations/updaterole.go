package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateRoleServerList = []string{
	"https://conversations.twilio.com",
}

type UpdateRolePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
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
	ContentType         string
	StatusCode          int64
	ConversationsV1Role *shared.ConversationsV1Role
}
