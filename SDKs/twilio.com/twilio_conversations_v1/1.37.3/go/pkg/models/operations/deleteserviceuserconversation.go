package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteServiceUserConversationServerList = []string{
	"https://conversations.twilio.com",
}

type DeleteServiceUserConversationPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	UserSid         string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type DeleteServiceUserConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteServiceUserConversationRequest struct {
	ServerURL  *string
	PathParams DeleteServiceUserConversationPathParams
	Security   DeleteServiceUserConversationSecurity
}

type DeleteServiceUserConversationResponse struct {
	ContentType string
	StatusCode  int64
}
