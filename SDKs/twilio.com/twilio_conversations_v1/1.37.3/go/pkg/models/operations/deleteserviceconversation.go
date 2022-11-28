package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteServiceConversationServerList = []string{
	"https://conversations.twilio.com",
}

type DeleteServiceConversationPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteServiceConversationHeaders struct {
	XTwilioWebhookEnabled *shared.ServiceConversationEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type DeleteServiceConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteServiceConversationRequest struct {
	ServerURL  *string
	PathParams DeleteServiceConversationPathParams
	Headers    DeleteServiceConversationHeaders
	Security   DeleteServiceConversationSecurity
}

type DeleteServiceConversationResponse struct {
	ContentType string
	StatusCode  int64
}
