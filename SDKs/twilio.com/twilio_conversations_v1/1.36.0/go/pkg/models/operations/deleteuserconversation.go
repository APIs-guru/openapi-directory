package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteUserConversationServers = []string{
	"https://conversations.twilio.com",
}

type DeleteUserConversationPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	UserSid         string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type DeleteUserConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteUserConversationRequest struct {
	ServerURL  *string
	PathParams DeleteUserConversationPathParams
	Security   DeleteUserConversationSecurity
}

type DeleteUserConversationResponse struct {
	ContentType string
	StatusCode  int64
}
