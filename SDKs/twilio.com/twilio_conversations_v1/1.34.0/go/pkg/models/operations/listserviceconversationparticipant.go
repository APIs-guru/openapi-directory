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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListServiceConversationParticipant200ApplicationJSONListServiceConversationParticipantResponse struct {
	Meta         *ListServiceConversationParticipant200ApplicationJSONMeta                        `json:"meta"`
	Participants []shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant `json:"participants"`
}

type ListServiceConversationParticipantResponse struct {
	ContentType                                string
	ListServiceConversationParticipantResponse *ListServiceConversationParticipant200ApplicationJSONListServiceConversationParticipantResponse
	StatusCode                                 int64
}
