package operations

import (
	"openapi/pkg/models/shared"
)

var FetchConversationMessageServerList = []string{
	"https://conversations.twilio.com",
}

type FetchConversationMessagePathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchConversationMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchConversationMessageRequest struct {
	ServerURL  *string
	PathParams FetchConversationMessagePathParams
	Security   FetchConversationMessageSecurity
}

type FetchConversationMessageResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ConversationsV1ConversationConversationMessage *shared.ConversationsV1ConversationConversationMessage
}
