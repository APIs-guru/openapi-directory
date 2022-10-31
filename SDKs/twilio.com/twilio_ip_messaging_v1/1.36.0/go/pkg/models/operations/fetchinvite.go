package operations

import (
"openapi/pkg/models/shared")
var FetchInviteServers = []string{
	"https://ip-messaging.twilio.com",
}

type FetchInvitePathParams struct {
    ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchInviteSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchInviteRequest struct {
    ServerURL *string 
    PathParams FetchInvitePathParams 
    Security FetchInviteSecurity 
    
}

type FetchInviteResponse struct {
    ContentType string 
    StatusCode int64 
    IPMessagingV1ServiceChannelInvite *shared.IPMessagingV1ServiceChannelInvite 
    
}

