package operations

import (
"openapi/pkg/models/shared")
var FetchServiceConversationMessageServers = []string{
	"https://conversations.twilio.com",
}

type FetchServiceConversationMessagePathParams struct {
    ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
    ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchServiceConversationMessageSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchServiceConversationMessageRequest struct {
    ServerURL *string 
    PathParams FetchServiceConversationMessagePathParams 
    Security FetchServiceConversationMessageSecurity 
    
}

type FetchServiceConversationMessageResponse struct {
    ContentType string 
    StatusCode int64 
    ConversationsV1ServiceServiceConversationServiceConversationMessage *shared.ConversationsV1ServiceServiceConversationServiceConversationMessage 
    
}

