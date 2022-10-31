package operations

import (
"openapi/pkg/models/shared")
var FetchConfigurationServers = []string{
	"https://conversations.twilio.com",
}

type FetchConfigurationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchConfigurationRequest struct {
    ServerURL *string 
    Security FetchConfigurationSecurity 
    
}

type FetchConfigurationResponse struct {
    ContentType string 
    StatusCode int64 
    ConversationsV1Configuration *shared.ConversationsV1Configuration 
    
}

