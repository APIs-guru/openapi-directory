package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceUserConversationServers = []string{
	"https://conversations.twilio.com",
}

type ListServiceUserConversationPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	UserSid        string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type ListServiceUserConversationQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceUserConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceUserConversationRequest struct {
	ServerURL   *string
	PathParams  ListServiceUserConversationPathParams
	QueryParams ListServiceUserConversationQueryParams
	Security    ListServiceUserConversationSecurity
}

type ListServiceUserConversation200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListServiceUserConversation200ApplicationJSONListServiceUserConversationResponse struct {
	Conversations []shared.ConversationsV1ServiceServiceUserServiceUserConversation `json:"conversations"`
	Meta          *ListServiceUserConversation200ApplicationJSONMeta                `json:"meta"`
}

type ListServiceUserConversationResponse struct {
	ContentType                         string
	ListServiceUserConversationResponse *ListServiceUserConversation200ApplicationJSONListServiceUserConversationResponse
	StatusCode                          int64
}
