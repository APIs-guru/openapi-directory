package operations

import (
	"openapi/pkg/models/shared"
)

var FetchServiceConversationServers = []string{
	"https://conversations.twilio.com",
}

type FetchServiceConversationPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchServiceConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchServiceConversationRequest struct {
	ServerURL  *string
	PathParams FetchServiceConversationPathParams
	Security   FetchServiceConversationSecurity
}

type FetchServiceConversationResponse struct {
	ContentType                               string
	StatusCode                                int64
	ConversationsV1ServiceServiceConversation *shared.ConversationsV1ServiceServiceConversation
}
