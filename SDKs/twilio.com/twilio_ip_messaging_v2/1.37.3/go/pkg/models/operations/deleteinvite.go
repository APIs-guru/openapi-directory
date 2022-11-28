package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteInviteServerList = []string{
	"https://ip-messaging.twilio.com",
}

type DeleteInvitePathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteInviteSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteInviteRequest struct {
	ServerURL  *string
	PathParams DeleteInvitePathParams
	Security   DeleteInviteSecurity
}

type DeleteInviteResponse struct {
	ContentType string
	StatusCode  int64
}
