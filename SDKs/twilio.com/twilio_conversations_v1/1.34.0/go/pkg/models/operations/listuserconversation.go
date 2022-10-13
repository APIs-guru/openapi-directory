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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListUserConversation200ApplicationJSONListUserConversationResponse struct {
	Conversations []shared.ConversationsV1UserUserConversation `json:"conversations"`
	Meta          *ListUserConversation200ApplicationJSONMeta  `json:"meta"`
}

type ListUserConversationResponse struct {
	ContentType                  string
	ListUserConversationResponse *ListUserConversation200ApplicationJSONListUserConversationResponse
	StatusCode                   int64
}
