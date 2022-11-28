package operations

import (
	"openapi/pkg/models/shared"
)

var CreateChannelServerList = []string{
	"https://chat.twilio.com",
}

type CreateChannelPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateChannelCreateChannelRequest struct {
	Attributes   *string                            `form:"name=Attributes"`
	FriendlyName *string                            `form:"name=FriendlyName"`
	Type         *shared.ChannelEnumChannelTypeEnum `form:"name=Type"`
	UniqueName   *string                            `form:"name=UniqueName"`
}

type CreateChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateChannelRequest struct {
	ServerURL  *string
	PathParams CreateChannelPathParams
	Request    *CreateChannelCreateChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateChannelSecurity
}

type CreateChannelResponse struct {
	ContentType          string
	StatusCode           int64
	ChatV1ServiceChannel *shared.ChatV1ServiceChannel
}
