package operations

import (
	"openapi/pkg/models/shared"
	"time"
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

type UpdateChannelUpdateChannelRequest struct {
	Attributes   *string    `form:"name=Attributes"`
	CreatedBy    *string    `form:"name=CreatedBy"`
	DateCreated  *time.Time `form:"name=DateCreated"`
	DateUpdated  *time.Time `form:"name=DateUpdated"`
	FriendlyName *string    `form:"name=FriendlyName"`
	UniqueName   *string    `form:"name=UniqueName"`
}

type UpdateChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateChannelRequest struct {
	ServerURL  *string
	PathParams UpdateChannelPathParams
	Headers    UpdateChannelHeaders
	Request    *UpdateChannelUpdateChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateChannelSecurity
}

type UpdateChannelResponse struct {
	ContentType          string
	StatusCode           int64
	ChatV2ServiceChannel *shared.ChatV2ServiceChannel
}
