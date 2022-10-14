package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceConversationParticipantServers = []string{
	"https://conversations.twilio.com",
}

type ListServiceConversationParticipantPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type ListServiceConversationParticipantQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceConversationParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceConversationParticipantRequest struct {
	ServerURL   *string
	PathParams  ListServiceConversationParticipantPathParams
	QueryParams ListServiceConversationParticipantQueryParams
	Security    ListServiceConversationParticipantSecurity
}

type ListServiceConversationParticipant200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListServiceConversationParticipant200ApplicationJSONListServiceConversationParticipantResponse struct {
	Meta         *ListServiceConversationParticipant200ApplicationJSONMeta                        `json:"meta,omitempty"`
	Participants []shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant `json:"participants,omitempty"`
}

type ListServiceConversationParticipantResponse struct {
	ContentType                                string
	ListServiceConversationParticipantResponse *ListServiceConversationParticipant200ApplicationJSONListServiceConversationParticipantResponse
	StatusCode                                 int64
}
