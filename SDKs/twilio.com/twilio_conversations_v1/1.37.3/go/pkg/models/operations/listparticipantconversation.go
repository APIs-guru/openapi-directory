package operations

import (
	"openapi/pkg/models/shared"
)

var ListParticipantConversationServerList = []string{
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

type ListParticipantConversationListParticipantConversationResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListParticipantConversationListParticipantConversationResponse struct {
	Conversations []shared.ConversationsV1ParticipantConversation                     `json:"conversations,omitempty"`
	Meta          *ListParticipantConversationListParticipantConversationResponseMeta `json:"meta,omitempty"`
}

type ListParticipantConversationRequest struct {
	ServerURL   *string
	QueryParams ListParticipantConversationQueryParams
	Security    ListParticipantConversationSecurity
}

type ListParticipantConversationResponse struct {
	ContentType                         string
	ListParticipantConversationResponse *ListParticipantConversationListParticipantConversationResponse
	StatusCode                          int64
}
