package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceParticipantConversationServers = []string{
	"https://conversations.twilio.com",
}

type ListServiceParticipantConversationPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type ListServiceParticipantConversationQueryParams struct {
	Address  *string `queryParam:"style=form,explode=true,name=Address"`
	Identity *string `queryParam:"style=form,explode=true,name=Identity"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceParticipantConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceParticipantConversationRequest struct {
	ServerURL   *string
	PathParams  ListServiceParticipantConversationPathParams
	QueryParams ListServiceParticipantConversationQueryParams
	Security    ListServiceParticipantConversationSecurity
}

type ListServiceParticipantConversation200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListServiceParticipantConversation200ApplicationJSONListServiceParticipantConversationResponse struct {
	Conversations []shared.ConversationsV1ServiceServiceParticipantConversation `json:"conversations"`
	Meta          *ListServiceParticipantConversation200ApplicationJSONMeta     `json:"meta"`
}

type ListServiceParticipantConversationResponse struct {
	ContentType                                string
	ListServiceParticipantConversationResponse *ListServiceParticipantConversation200ApplicationJSONListServiceParticipantConversationResponse
	StatusCode                                 int64
}
