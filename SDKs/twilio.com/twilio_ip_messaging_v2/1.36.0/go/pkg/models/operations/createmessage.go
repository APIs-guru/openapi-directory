package operations

import (
"time"
"openapi/pkg/models/shared")
var CreateMessageServers = []string{
	"https://ip-messaging.twilio.com",
}

type CreateMessagePathParams struct {
    ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type CreateMessageHeaders struct {
    XTwilioWebhookEnabled *shared.MessageEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
    
}

type CreateMessageCreateMessageRequest struct {
    Attributes *string `form:"name=Attributes"`
    Body *string `form:"name=Body"`
    DateCreated *time.Time `form:"name=DateCreated"`
    DateUpdated *time.Time `form:"name=DateUpdated"`
    From *string `form:"name=From"`
    LastUpdatedBy *string `form:"name=LastUpdatedBy"`
    MediaSid *string `form:"name=MediaSid"`
    
}

type CreateMessageSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateMessageRequest struct {
    ServerURL *string 
    PathParams CreateMessagePathParams 
    Headers CreateMessageHeaders 
    Request *CreateMessageCreateMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateMessageSecurity 
    
}

type CreateMessageResponse struct {
    ContentType string 
    StatusCode int64 
    IPMessagingV2ServiceChannelMessage *shared.IPMessagingV2ServiceChannelMessage 
    
}

