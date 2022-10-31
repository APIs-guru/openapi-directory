package operations

import (
"openapi/pkg/models/shared")
var UpdateChannelServers = []string{
	"https://chat.twilio.com",
}

type UpdateChannelPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateChannelUpdateChannelRequest struct {
    Attributes *string `form:"name=Attributes"`
    FriendlyName *string `form:"name=FriendlyName"`
    UniqueName *string `form:"name=UniqueName"`
    
}

type UpdateChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateChannelRequest struct {
    ServerURL *string 
    PathParams UpdateChannelPathParams 
    Request *UpdateChannelUpdateChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateChannelSecurity 
    
}

type UpdateChannelResponse struct {
    ContentType string 
    StatusCode int64 
    ChatV1ServiceChannel *shared.ChatV1ServiceChannel 
    
}

