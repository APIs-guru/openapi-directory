package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateMemberServers = []string{
	"https://chat.twilio.com",
}

type CreateMemberPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateMemberHeaders struct {
	XTwilioWebhookEnabled *shared.MemberEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type CreateMemberCreateMemberRequest struct {
	Attributes               *string    `form:"name=Attributes"`
	DateCreated              *time.Time `form:"name=DateCreated"`
	DateUpdated              *time.Time `form:"name=DateUpdated"`
	Identity                 string     `form:"name=Identity"`
	LastConsumedMessageIndex *int64     `form:"name=LastConsumedMessageIndex"`
	LastConsumptionTimestamp *time.Time `form:"name=LastConsumptionTimestamp"`
	RoleSid                  *string    `form:"name=RoleSid"`
}

type CreateMemberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateMemberRequest struct {
	ServerURL  *string
	PathParams CreateMemberPathParams
	Headers    CreateMemberHeaders
	Request    *CreateMemberCreateMemberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateMemberSecurity
}

type CreateMemberResponse struct {
	ContentType                string
	StatusCode                 int64
	ChatV2ServiceChannelMember *shared.ChatV2ServiceChannelMember
}
