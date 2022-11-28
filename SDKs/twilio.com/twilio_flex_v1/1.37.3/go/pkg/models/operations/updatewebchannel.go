package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateWebChannelServerList = []string{
	"https://flex-api.twilio.com",
}

type UpdateWebChannelPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateWebChannelUpdateWebChannelRequest struct {
	ChatStatus         *shared.WebChannelEnumChatStatusEnum `form:"name=ChatStatus"`
	PostEngagementData *string                              `form:"name=PostEngagementData"`
}

type UpdateWebChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateWebChannelRequest struct {
	ServerURL  *string
	PathParams UpdateWebChannelPathParams
	Request    *UpdateWebChannelUpdateWebChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateWebChannelSecurity
}

type UpdateWebChannelResponse struct {
	ContentType      string
	StatusCode       int64
	FlexV1WebChannel *shared.FlexV1WebChannel
}
