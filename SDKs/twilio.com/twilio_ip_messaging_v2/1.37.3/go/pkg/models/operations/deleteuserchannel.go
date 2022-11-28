package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteUserChannelServerList = []string{
	"https://ip-messaging.twilio.com",
}

type DeleteUserChannelPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	UserSid    string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type DeleteUserChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteUserChannelRequest struct {
	ServerURL  *string
	PathParams DeleteUserChannelPathParams
	Security   DeleteUserChannelSecurity
}

type DeleteUserChannelResponse struct {
	ContentType string
	StatusCode  int64
}
