package operations

import (
	"openapi/pkg/models/shared"
)

var CreateServiceRoleServers = []string{
	"https://conversations.twilio.com",
}

type CreateServiceRolePathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type CreateServiceRoleCreateServiceRoleRequest struct {
	FriendlyName string                             `form:"name=FriendlyName"`
	Permission   []string                           `form:"name=Permission"`
	Type         shared.ServiceRoleEnumRoleTypeEnum `form:"name=Type"`
}

type CreateServiceRoleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateServiceRoleRequest struct {
	ServerURL  *string
	PathParams CreateServiceRolePathParams
	Request    *CreateServiceRoleCreateServiceRoleRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateServiceRoleSecurity
}

type CreateServiceRoleResponse struct {
	ContentType                       string
	StatusCode                        int64
	ConversationsV1ServiceServiceRole *shared.ConversationsV1ServiceServiceRole
}
