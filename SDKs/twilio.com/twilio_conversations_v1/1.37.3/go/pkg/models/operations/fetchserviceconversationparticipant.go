package operations

import (
	"openapi/pkg/models/shared"
)

var FetchServiceConversationParticipantServerList = []string{
	"https://conversations.twilio.com",
}

type FetchServiceConversationParticipantPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchServiceConversationParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchServiceConversationParticipantRequest struct {
	ServerURL  *string
	PathParams FetchServiceConversationParticipantPathParams
	Security   FetchServiceConversationParticipantSecurity
}

type FetchServiceConversationParticipantResponse struct {
	ContentType                                                             string
	StatusCode                                                              int64
	ConversationsV1ServiceServiceConversationServiceConversationParticipant *shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant
}
