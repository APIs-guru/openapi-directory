package operations

import (
"time"
"openapi/pkg/models/shared")
var CreateChannelServers = []string{
	"https://chat.twilio.com",
}

type CreateChannelPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type CreateChannelHeaders struct {
    XTwilioWebhookEnabled *shared.ChannelEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
    
}

type CreateChannelCreateChannelRequest struct {
    Attributes *string `form:"name=Attributes"`
    CreatedBy *string `form:"name=CreatedBy"`
    DateCreated *time.Time `form:"name=DateCreated"`
    DateUpdated *time.Time `form:"name=DateUpdated"`
    FriendlyName *string `form:"name=FriendlyName"`
    Type *shared.ChannelEnumChannelTypeEnum `form:"name=Type"`
    UniqueName *string `form:"name=UniqueName"`
    
}

type CreateChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateChannelRequest struct {
    ServerURL *string 
    PathParams CreateChannelPathParams 
    Headers CreateChannelHeaders 
    Request *CreateChannelCreateChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateChannelSecurity 
    
}

type CreateChannelResponse struct {
    ContentType string 
    StatusCode int64 
    ChatV2ServiceChannel *shared.ChatV2ServiceChannel 
    
}

