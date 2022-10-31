package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUserConversationServers = []string{
	"https://conversations.twilio.com",
}

type FetchUserConversationPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	UserSid         string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type FetchUserConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUserConversationRequest struct {
	ServerURL  *string
	PathParams FetchUserConversationPathParams
	Security   FetchUserConversationSecurity
}

type FetchUserConversationResponse struct {
	ContentType                         string
	StatusCode                          int64
	ConversationsV1UserUserConversation *shared.ConversationsV1UserUserConversation
}
