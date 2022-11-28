package operations

import (
	"openapi/pkg/models/shared"
)

var FetchServiceUserConversationServerList = []string{
	"https://conversations.twilio.com",
}

type FetchServiceUserConversationPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	UserSid         string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type FetchServiceUserConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchServiceUserConversationRequest struct {
	ServerURL  *string
	PathParams FetchServiceUserConversationPathParams
	Security   FetchServiceUserConversationSecurity
}

type FetchServiceUserConversationResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	ConversationsV1ServiceServiceUserServiceUserConversation *shared.ConversationsV1ServiceServiceUserServiceUserConversation
}
