package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateChannelServers = []string{
	"https://chat.twilio.com",
}

type UpdateChannelPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateChannelHeaders struct {
	XTwilioWebhookEnabled *shared.ChannelEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type UpdateChannelRequestBodyUpdateChannelRequest struct {
	MessagingServiceSid *string                            `form:"name=MessagingServiceSid"`
	Type                *shared.ChannelEnumChannelTypeEnum `form:"name=Type"`
}

type UpdateChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateChannelRequest struct {
	ServerURL  *string
	PathParams UpdateChannelPathParams
	Headers    UpdateChannelHeaders
	Request    *UpdateChannelRequestBodyUpdateChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateChannelSecurity
}

type UpdateChannelResponse struct {
	ContentType   string
	StatusCode    int64
	ChatV3Channel *shared.ChatV3Channel
}
