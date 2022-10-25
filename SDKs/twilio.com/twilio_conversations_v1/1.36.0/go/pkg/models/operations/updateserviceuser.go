package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateServiceUserServers = []string{
	"https://conversations.twilio.com",
}

type UpdateServiceUserPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateServiceUserHeaders struct {
	XTwilioWebhookEnabled *shared.ServiceUserEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type UpdateServiceUserUpdateServiceUserRequest struct {
	Attributes   *string `form:"name=Attributes"`
	FriendlyName *string `form:"name=FriendlyName"`
	RoleSid      *string `form:"name=RoleSid"`
}

type UpdateServiceUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceUserRequest struct {
	ServerURL  *string
	PathParams UpdateServiceUserPathParams
	Headers    UpdateServiceUserHeaders
	Request    *UpdateServiceUserUpdateServiceUserRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceUserSecurity
}

type UpdateServiceUserResponse struct {
	ContentType                       string
	StatusCode                        int64
	ConversationsV1ServiceServiceUser *shared.ConversationsV1ServiceServiceUser
}
