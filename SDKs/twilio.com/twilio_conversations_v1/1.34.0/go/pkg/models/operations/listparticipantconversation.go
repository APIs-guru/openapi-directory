package operations

import (
	"openapi/pkg/models/shared"
)

var ListParticipantConversationServers = []string{
	"https://conversations.twilio.com",
}

type ListParticipantConversationQueryParams struct {
	Address  *string `queryParam:"style=form,explode=true,name=Address"`
	Identity *string `queryParam:"style=form,explode=true,name=Identity"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListParticipantConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListParticipantConversationRequest struct {
	ServerURL   *string
	QueryParams ListParticipantConversationQueryParams
	Security    ListParticipantConversationSecurity
}

type ListParticipantConversation200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListParticipantConversation200ApplicationJSONListParticipantConversationResponse struct {
	Conversations []shared.ConversationsV1ParticipantConversation    `json:"conversations"`
	Meta          *ListParticipantConversation200ApplicationJSONMeta `json:"meta"`
}

type ListParticipantConversationResponse struct {
	ContentType                         string
	ListParticipantConversationResponse *ListParticipantConversation200ApplicationJSONListParticipantConversationResponse
	StatusCode                          int64
}
