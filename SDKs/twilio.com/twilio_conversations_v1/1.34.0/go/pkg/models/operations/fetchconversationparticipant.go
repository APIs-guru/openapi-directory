package operations

import (
	"openapi/pkg/models/shared"
)

var FetchConversationParticipantServers = []string{
	"https://conversations.twilio.com",
}

type FetchConversationParticipantPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchConversationParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchConversationParticipantRequest struct {
	ServerURL  *string
	PathParams FetchConversationParticipantPathParams
	Security   FetchConversationParticipantSecurity
}

type FetchConversationParticipantResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	ConversationsV1ConversationConversationParticipant *shared.ConversationsV1ConversationConversationParticipant
}
