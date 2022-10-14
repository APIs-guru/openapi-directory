package operations

import (
	"openapi/pkg/models/shared"
)

var ListConversationMessageServers = []string{
	"https://conversations.twilio.com",
}

type ListConversationMessagePathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type ListConversationMessageQueryParams struct {
	Order    *shared.ConversationMessageEnumOrderTypeEnum `queryParam:"style=form,explode=true,name=Order"`
	PageSize *int64                                       `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListConversationMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConversationMessageRequest struct {
	ServerURL   *string
	PathParams  ListConversationMessagePathParams
	QueryParams ListConversationMessageQueryParams
	Security    ListConversationMessageSecurity
}

type ListConversationMessage200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListConversationMessage200ApplicationJSONListConversationMessageResponse struct {
	Messages []shared.ConversationsV1ConversationConversationMessage `json:"messages,omitempty"`
	Meta     *ListConversationMessage200ApplicationJSONMeta          `json:"meta,omitempty"`
}

type ListConversationMessageResponse struct {
	ContentType                     string
	ListConversationMessageResponse *ListConversationMessage200ApplicationJSONListConversationMessageResponse
	StatusCode                      int64
}
