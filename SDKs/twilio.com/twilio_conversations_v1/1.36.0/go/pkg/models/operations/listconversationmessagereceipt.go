package operations

import (
	"openapi/pkg/models/shared"
)

var ListConversationMessageReceiptServers = []string{
	"https://conversations.twilio.com",
}

type ListConversationMessageReceiptPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	MessageSid      string `pathParam:"style=simple,explode=false,name=MessageSid"`
}

type ListConversationMessageReceiptQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListConversationMessageReceiptSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConversationMessageReceiptRequest struct {
	ServerURL   *string
	PathParams  ListConversationMessageReceiptPathParams
	QueryParams ListConversationMessageReceiptQueryParams
	Security    ListConversationMessageReceiptSecurity
}

type ListConversationMessageReceipt200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListConversationMessageReceipt200ApplicationJSONListConversationMessageReceiptResponse struct {
	DeliveryReceipts []shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt `json:"delivery_receipts"`
	Meta             *ListConversationMessageReceipt200ApplicationJSONMeta                             `json:"meta"`
}

type ListConversationMessageReceiptResponse struct {
	ContentType                            string
	ListConversationMessageReceiptResponse *ListConversationMessageReceipt200ApplicationJSONListConversationMessageReceiptResponse
	StatusCode                             int64
}
