package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteServiceUserServers = []string{
	"https://conversations.twilio.com",
}

type DeleteServiceUserPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteServiceUserHeaders struct {
	XTwilioWebhookEnabled *shared.ServiceUserEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type DeleteServiceUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteServiceUserRequest struct {
	ServerURL  *string
	PathParams DeleteServiceUserPathParams
	Headers    DeleteServiceUserHeaders
	Security   DeleteServiceUserSecurity
}

type DeleteServiceUserResponse struct {
	ContentType string
	StatusCode  int64
}
