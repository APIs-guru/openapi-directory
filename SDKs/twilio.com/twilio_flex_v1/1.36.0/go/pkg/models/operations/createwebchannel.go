package operations

import (
"openapi/pkg/models/shared")
var CreateWebChannelServers = []string{
	"https://flex-api.twilio.com",
}

type CreateWebChannelCreateWebChannelRequest struct {
    ChatFriendlyName string `form:"name=ChatFriendlyName"`
    ChatUniqueName *string `form:"name=ChatUniqueName"`
    CustomerFriendlyName string `form:"name=CustomerFriendlyName"`
    FlexFlowSid string `form:"name=FlexFlowSid"`
    Identity string `form:"name=Identity"`
    PreEngagementData *string `form:"name=PreEngagementData"`
    
}

type CreateWebChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateWebChannelRequest struct {
    ServerURL *string 
    Request *CreateWebChannelCreateWebChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateWebChannelSecurity 
    
}

type CreateWebChannelResponse struct {
    ContentType string 
    StatusCode int64 
    FlexV1WebChannel *shared.FlexV1WebChannel 
    
}

