package operations

import (
	"openapi/pkg/models/shared"
)

var FetchMemberServerList = []string{
	"https://ip-messaging.twilio.com",
}

type FetchMemberPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchMemberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchMemberRequest struct {
	ServerURL  *string
	PathParams FetchMemberPathParams
	Security   FetchMemberSecurity
}

type FetchMemberResponse struct {
	ContentType                       string
	StatusCode                        int64
	IPMessagingV1ServiceChannelMember *shared.IPMessagingV1ServiceChannelMember
}
