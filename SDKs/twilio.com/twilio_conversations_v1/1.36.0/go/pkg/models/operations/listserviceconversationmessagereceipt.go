package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceConversationMessageReceiptServers = []string{
	"https://conversations.twilio.com",
}

type ListServiceConversationMessageReceiptPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	MessageSid      string `pathParam:"style=simple,explode=false,name=MessageSid"`
}

type ListServiceConversationMessageReceiptQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceConversationMessageReceiptSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceConversationMessageReceiptRequest struct {
	ServerURL   *string
	PathParams  ListServiceConversationMessageReceiptPathParams
	QueryParams ListServiceConversationMessageReceiptQueryParams
	Security    ListServiceConversationMessageReceiptSecurity
}

type ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse struct {
	DeliveryReceipts []shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt `json:"delivery_receipts,omitempty"`
	Meta             *ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta                       `json:"meta,omitempty"`
}

type ListServiceConversationMessageReceiptResponse struct {
	ContentType                                   string
	ListServiceConversationMessageReceiptResponse *ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse
	StatusCode                                    int64
}
