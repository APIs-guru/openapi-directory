package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUserServers = []string{
	"https://ip-messaging.twilio.com",
}

type UpdateUserPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateUserHeaders struct {
	XTwilioWebhookEnabled *shared.UserEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type UpdateUserUpdateUserRequest struct {
	Attributes   *string `form:"name=Attributes"`
	FriendlyName *string `form:"name=FriendlyName"`
	RoleSid      *string `form:"name=RoleSid"`
}

type UpdateUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUserRequest struct {
	ServerURL  *string
	PathParams UpdateUserPathParams
	Headers    UpdateUserHeaders
	Request    *UpdateUserUpdateUserRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUserSecurity
}

type UpdateUserResponse struct {
	ContentType              string
	StatusCode               int64
	IPMessagingV2ServiceUser *shared.IPMessagingV2ServiceUser
}
