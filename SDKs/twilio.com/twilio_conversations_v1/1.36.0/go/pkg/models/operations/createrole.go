package operations

import (
	"openapi/pkg/models/shared"
)

var CreateRoleServers = []string{
	"https://conversations.twilio.com",
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
	ServerURL *string
	Request   *CreateRoleRequestBodyCreateRoleRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateRoleSecurity
}

type CreateRoleResponse struct {
	ContentType         string
	StatusCode          int64
	ConversationsV1Role *shared.ConversationsV1Role
}
