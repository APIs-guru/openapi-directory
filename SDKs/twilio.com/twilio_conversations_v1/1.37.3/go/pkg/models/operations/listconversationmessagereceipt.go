package operations

import (
	"openapi/pkg/models/shared"
)

var ListConversationMessageReceiptServerList = []string{
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

type ListConversationMessageReceiptListConversationMessageReceiptResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListConversationMessageReceiptListConversationMessageReceiptResponse struct {
	DeliveryReceipts []shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt `json:"delivery_receipts,omitempty"`
	Meta             *ListConversationMessageReceiptListConversationMessageReceiptResponseMeta         `json:"meta,omitempty"`
}

type ListConversationMessageReceiptRequest struct {
	ServerURL   *string
	PathParams  ListConversationMessageReceiptPathParams
	QueryParams ListConversationMessageReceiptQueryParams
	Security    ListConversationMessageReceiptSecurity
}

type ListConversationMessageReceiptResponse struct {
	ContentType                            string
	ListConversationMessageReceiptResponse *ListConversationMessageReceiptListConversationMessageReceiptResponse
	StatusCode                             int64
}
