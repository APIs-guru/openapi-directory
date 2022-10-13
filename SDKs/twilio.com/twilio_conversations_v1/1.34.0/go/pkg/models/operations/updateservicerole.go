package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateServiceRoleServers = []string{
	"https://conversations.twilio.com",
}

type UpdateServiceRolePathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateServiceRoleRequestBodyUpdateServiceRoleRequest struct {
	Permission []string `form:"name=Permission"`
}

type UpdateServiceRoleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceRoleRequest struct {
	ServerURL  *string
	PathParams UpdateServiceRolePathParams
	Request    *UpdateServiceRoleRequestBodyUpdateServiceRoleRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceRoleSecurity
}

type UpdateServiceRoleResponse struct {
	ContentType                       string
	StatusCode                        int64
	ConversationsV1ServiceServiceRole *shared.ConversationsV1ServiceServiceRole
}
