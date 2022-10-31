package operations

import (
	"openapi/pkg/models/shared"
)

var CreateServiceUserServers = []string{
	"https://conversations.twilio.com",
}

type CreateServiceUserPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type CreateServiceUserHeaders struct {
	XTwilioWebhookEnabled *shared.ServiceUserEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type CreateServiceUserCreateServiceUserRequest struct {
	Attributes   *string `form:"name=Attributes"`
	FriendlyName *string `form:"name=FriendlyName"`
	Identity     string  `form:"name=Identity"`
	RoleSid      *string `form:"name=RoleSid"`
}

type CreateServiceUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateServiceUserRequest struct {
	ServerURL  *string
	PathParams CreateServiceUserPathParams
	Headers    CreateServiceUserHeaders
	Request    *CreateServiceUserCreateServiceUserRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateServiceUserSecurity
}

type CreateServiceUserResponse struct {
	ContentType                       string
	StatusCode                        int64
	ConversationsV1ServiceServiceUser *shared.ConversationsV1ServiceServiceUser
}
