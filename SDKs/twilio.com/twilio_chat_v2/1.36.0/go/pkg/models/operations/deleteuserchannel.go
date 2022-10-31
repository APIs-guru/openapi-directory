package operations

import (
"openapi/pkg/models/shared")
var DeleteUserChannelServers = []string{
	"https://chat.twilio.com",
}

type DeleteUserChannelPathParams struct {
    ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    UserSid string `pathParam:"style=simple,explode=false,name=UserSid"`
    
}

type DeleteUserChannelHeaders struct {
    XTwilioWebhookEnabled *shared.UserChannelEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
    
}

type DeleteUserChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteUserChannelRequest struct {
    ServerURL *string 
    PathParams DeleteUserChannelPathParams 
    Headers DeleteUserChannelHeaders 
    Security DeleteUserChannelSecurity 
    
}

type DeleteUserChannelResponse struct {
    ContentType string 
    StatusCode int64 
    
}

