package operations

import (
"openapi/pkg/models/shared")
var FetchInteractionChannelServers = []string{
	"https://flex-api.twilio.com",
}

type FetchInteractionChannelPathParams struct {
    InteractionSid string `pathParam:"style=simple,explode=false,name=InteractionSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchInteractionChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchInteractionChannelRequest struct {
    ServerURL *string 
    PathParams FetchInteractionChannelPathParams 
    Security FetchInteractionChannelSecurity 
    
}

type FetchInteractionChannelResponse struct {
    ContentType string 
    StatusCode int64 
    FlexV1InteractionInteractionChannel *shared.FlexV1InteractionInteractionChannel 
    
}

