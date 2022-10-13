package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUserServers = []string{
	"https://conversations.twilio.com",
}

type CreateUserHeaders struct {
	XTwilioWebhookEnabled *shared.UserEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type CreateUserRequestBodyCreateUserRequest struct {
	Attributes   *string `form:"name=Attributes"`
	FriendlyName *string `form:"name=FriendlyName"`
	Identity     string  `form:"name=Identity"`
	RoleSid      *string `form:"name=RoleSid"`
}

type CreateUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateUserRequest struct {
	ServerURL *string
	Headers   CreateUserHeaders
	Request   *CreateUserRequestBodyCreateUserRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateUserSecurity
}

type CreateUserResponse struct {
	ContentType         string
	StatusCode          int64
	ConversationsV1User *shared.ConversationsV1User
}
