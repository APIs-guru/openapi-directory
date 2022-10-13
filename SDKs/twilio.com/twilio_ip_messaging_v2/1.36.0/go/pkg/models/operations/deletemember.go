package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteMemberServers = []string{
	"https://ip-messaging.twilio.com",
}

type DeleteMemberPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteMemberHeaders struct {
	XTwilioWebhookEnabled *shared.MemberEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type DeleteMemberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteMemberRequest struct {
	ServerURL  *string
	PathParams DeleteMemberPathParams
	Headers    DeleteMemberHeaders
	Security   DeleteMemberSecurity
}

type DeleteMemberResponse struct {
	ContentType string
	StatusCode  int64
}
