package operations

import (
	"openapi/pkg/models/shared"
)

var ListConversationServers = []string{
	"https://conversations.twilio.com",
}

type ListConversationQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConversationRequest struct {
	ServerURL   *string
	QueryParams ListConversationQueryParams
	Security    ListConversationSecurity
}

type ListConversation200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListConversation200ApplicationJSONListConversationResponse struct {
	Conversations []shared.ConversationsV1Conversation    `json:"conversations,omitempty"`
	Meta          *ListConversation200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListConversationResponse struct {
	ContentType              string
	ListConversationResponse *ListConversation200ApplicationJSONListConversationResponse
	StatusCode               int64
}
