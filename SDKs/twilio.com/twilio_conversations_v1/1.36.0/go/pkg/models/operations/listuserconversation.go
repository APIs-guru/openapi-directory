package operations

import (
	"openapi/pkg/models/shared"
)

var ListUserConversationServers = []string{
	"https://conversations.twilio.com",
}

type ListUserConversationPathParams struct {
	UserSid string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type ListUserConversationQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUserConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUserConversationRequest struct {
	ServerURL   *string
	PathParams  ListUserConversationPathParams
	QueryParams ListUserConversationQueryParams
	Security    ListUserConversationSecurity
}

type ListUserConversation200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListUserConversation200ApplicationJSONListUserConversationResponse struct {
	Conversations []shared.ConversationsV1UserUserConversation `json:"conversations,omitempty"`
	Meta          *ListUserConversation200ApplicationJSONMeta  `json:"meta,omitempty"`
}

type ListUserConversationResponse struct {
	ContentType                  string
	ListUserConversationResponse *ListUserConversation200ApplicationJSONListUserConversationResponse
	StatusCode                   int64
}
