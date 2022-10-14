package operations

import (
	"openapi/pkg/models/shared"
)

var ListConversationParticipantServers = []string{
	"https://conversations.twilio.com",
}

type ListConversationParticipantPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type ListConversationParticipantQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListConversationParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConversationParticipantRequest struct {
	ServerURL   *string
	PathParams  ListConversationParticipantPathParams
	QueryParams ListConversationParticipantQueryParams
	Security    ListConversationParticipantSecurity
}

type ListConversationParticipant200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListConversationParticipant200ApplicationJSONListConversationParticipantResponse struct {
	Meta         *ListConversationParticipant200ApplicationJSONMeta          `json:"meta,omitempty"`
	Participants []shared.ConversationsV1ConversationConversationParticipant `json:"participants,omitempty"`
}

type ListConversationParticipantResponse struct {
	ContentType                         string
	ListConversationParticipantResponse *ListConversationParticipant200ApplicationJSONListConversationParticipantResponse
	StatusCode                          int64
}
