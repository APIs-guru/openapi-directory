package operations

import (
"openapi/pkg/models/shared")
var UpdateMessageServers = []string{
	"https://chat.twilio.com",
}

type UpdateMessagePathParams struct {
    ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateMessageUpdateMessageRequest struct {
    Attributes *string `form:"name=Attributes"`
    Body *string `form:"name=Body"`
    
}

type UpdateMessageSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateMessageRequest struct {
    ServerURL *string 
    PathParams UpdateMessagePathParams 
    Request *UpdateMessageUpdateMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateMessageSecurity 
    
}

type UpdateMessageResponse struct {
    ContentType string 
    StatusCode int64 
    ChatV1ServiceChannelMessage *shared.ChatV1ServiceChannelMessage 
    
}

