package operations

import (
"openapi/pkg/models/shared")
var FetchMessageServers = []string{
	"https://chat.twilio.com",
}

type FetchMessagePathParams struct {
    ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchMessageSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchMessageRequest struct {
    ServerURL *string 
    PathParams FetchMessagePathParams 
    Security FetchMessageSecurity 
    
}

type FetchMessageResponse struct {
    ContentType string 
    StatusCode int64 
    ChatV2ServiceChannelMessage *shared.ChatV2ServiceChannelMessage 
    
}

