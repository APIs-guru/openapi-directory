package operations

import (
	"openapi/pkg/models/shared"
)

var CreateRoleServers = []string{
	"https://ip-messaging.twilio.com",
}

type CreateRolePathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateRoleCreateRoleRequest struct {
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
	Request    *CreateRoleCreateRoleRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateRoleSecurity
}

type CreateRoleResponse struct {
	ContentType              string
	StatusCode               int64
	IPMessagingV2ServiceRole *shared.IPMessagingV2ServiceRole
}
