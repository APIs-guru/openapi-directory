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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListConversation200ApplicationJSONListConversationResponse struct {
	Conversations []shared.ConversationsV1Conversation    `json:"conversations"`
	Meta          *ListConversation200ApplicationJSONMeta `json:"meta"`
}

type ListConversationResponse struct {
	ContentType              string
	ListConversationResponse *ListConversation200ApplicationJSONListConversationResponse
	StatusCode               int64
}
