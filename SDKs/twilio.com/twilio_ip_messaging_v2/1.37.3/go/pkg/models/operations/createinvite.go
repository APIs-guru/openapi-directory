package operations

import (
	"openapi/pkg/models/shared"
)

var CreateInviteServerList = []string{
	"https://ip-messaging.twilio.com",
}

type CreateInvitePathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateInviteCreateInviteRequest struct {
	Identity string  `form:"name=Identity"`
	RoleSid  *string `form:"name=RoleSid"`
}

type CreateInviteSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateInviteRequest struct {
	ServerURL  *string
	PathParams CreateInvitePathParams
	Request    *CreateInviteCreateInviteRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateInviteSecurity
}

type CreateInviteResponse struct {
	ContentType                       string
	StatusCode                        int64
	IPMessagingV2ServiceChannelInvite *shared.IPMessagingV2ServiceChannelInvite
}
