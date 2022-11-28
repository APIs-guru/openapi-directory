package operations

import (
	"openapi/pkg/models/shared"
)

var ListConversationServerList = []string{
	"https://conversations.twilio.com",
}

type ListConversationQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConversationListConversationResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListConversationListConversationResponse struct {
	Conversations []shared.ConversationsV1Conversation          `json:"conversations,omitempty"`
	Meta          *ListConversationListConversationResponseMeta `json:"meta,omitempty"`
}

type ListConversationRequest struct {
	ServerURL   *string
	QueryParams ListConversationQueryParams
	Security    ListConversationSecurity
}

type ListConversationResponse struct {
	ContentType              string
	ListConversationResponse *ListConversationListConversationResponse
	StatusCode               int64
}
