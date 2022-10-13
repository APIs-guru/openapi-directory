package operations

import (
	"openapi/pkg/models/shared"
)

var FetchConversationMessageReceiptServers = []string{
	"https://conversations.twilio.com",
}

type FetchConversationMessageReceiptPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	MessageSid      string `pathParam:"style=simple,explode=false,name=MessageSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchConversationMessageReceiptSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchConversationMessageReceiptRequest struct {
	ServerURL  *string
	PathParams FetchConversationMessageReceiptPathParams
	Security   FetchConversationMessageReceiptSecurity
}

type FetchConversationMessageReceiptResponse struct {
	ContentType                                                              string
	StatusCode                                                               int64
	ConversationsV1ConversationConversationMessageConversationMessageReceipt *shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt
}
