package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var UpdateMemberServerList = []string{
	"https://chat.twilio.com",
}

type UpdateMemberPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateMemberHeaders struct {
	XTwilioWebhookEnabled *shared.MemberEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type UpdateMemberUpdateMemberRequest struct {
	Attributes               *string    `form:"name=Attributes"`
	DateCreated              *time.Time `form:"name=DateCreated"`
	DateUpdated              *time.Time `form:"name=DateUpdated"`
	LastConsumedMessageIndex *int64     `form:"name=LastConsumedMessageIndex"`
	LastConsumptionTimestamp *time.Time `form:"name=LastConsumptionTimestamp"`
	RoleSid                  *string    `form:"name=RoleSid"`
}

type UpdateMemberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateMemberRequest struct {
	ServerURL  *string
	PathParams UpdateMemberPathParams
	Headers    UpdateMemberHeaders
	Request    *UpdateMemberUpdateMemberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateMemberSecurity
}

type UpdateMemberResponse struct {
	ContentType                string
	StatusCode                 int64
	ChatV2ServiceChannelMember *shared.ChatV2ServiceChannelMember
}
