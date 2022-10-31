package operations

import (
"openapi/pkg/models/shared")
var FetchConversationServers = []string{
	"https://conversations.twilio.com",
}

type FetchConversationPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchConversationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchConversationRequest struct {
    ServerURL *string 
    PathParams FetchConversationPathParams 
    Security FetchConversationSecurity 
    
}

type FetchConversationResponse struct {
    ContentType string 
    StatusCode int64 
    ConversationsV1Conversation *shared.ConversationsV1Conversation 
    
}

