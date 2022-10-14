package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceConversationServers = []string{
	"https://conversations.twilio.com",
}

type ListServiceConversationPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type ListServiceConversationQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceConversationRequest struct {
	ServerURL   *string
	PathParams  ListServiceConversationPathParams
	QueryParams ListServiceConversationQueryParams
	Security    ListServiceConversationSecurity
}

type ListServiceConversation200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListServiceConversation200ApplicationJSONListServiceConversationResponse struct {
	Conversations []shared.ConversationsV1ServiceServiceConversation `json:"conversations,omitempty"`
	Meta          *ListServiceConversation200ApplicationJSONMeta     `json:"meta,omitempty"`
}

type ListServiceConversationResponse struct {
	ContentType                     string
	ListServiceConversationResponse *ListServiceConversation200ApplicationJSONListServiceConversationResponse
	StatusCode                      int64
}
