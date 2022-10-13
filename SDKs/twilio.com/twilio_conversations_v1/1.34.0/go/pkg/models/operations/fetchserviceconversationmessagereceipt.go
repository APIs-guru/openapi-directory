package operations

import (
	"openapi/pkg/models/shared"
)

var FetchServiceConversationMessageReceiptServers = []string{
	"https://conversations.twilio.com",
}

type FetchServiceConversationMessageReceiptPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	MessageSid      string `pathParam:"style=simple,explode=false,name=MessageSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchServiceConversationMessageReceiptSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchServiceConversationMessageReceiptRequest struct {
	ServerURL  *string
	PathParams FetchServiceConversationMessageReceiptPathParams
	Security   FetchServiceConversationMessageReceiptSecurity
}

type FetchServiceConversationMessageReceiptResponse struct {
	ContentType                                                                                          string
	StatusCode                                                                                           int64
	ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt *shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt
}
