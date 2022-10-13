package operations

import (
	"openapi/pkg/models/shared"
)

var CreateRoleServers = []string{
	"https://chat.twilio.com",
}

type CreateRolePathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateRoleRequestBodyCreateRoleRequest struct {
	FriendlyName string                      `form:"name=FriendlyName"`
	Permission   []string                    `form:"name=Permission"`
	Type         shared.RoleEnumRoleTypeEnum `form:"name=Type"`
}

type CreateRoleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateRoleRequest struct {
	ServerURL  *string
	PathParams CreateRolePathParams
	Request    *CreateRoleRequestBodyCreateRoleRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateRoleSecurity
}

type CreateRoleResponse struct {
	ContentType       string
	StatusCode        int64
	ChatV2ServiceRole *shared.ChatV2ServiceRole
}
