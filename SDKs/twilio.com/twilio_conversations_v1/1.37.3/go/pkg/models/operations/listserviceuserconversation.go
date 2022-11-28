package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceUserConversationServerList = []string{
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

type ListServiceUserConversationListServiceUserConversationResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListServiceUserConversationListServiceUserConversationResponse struct {
	Conversations []shared.ConversationsV1ServiceServiceUserServiceUserConversation   `json:"conversations,omitempty"`
	Meta          *ListServiceUserConversationListServiceUserConversationResponseMeta `json:"meta,omitempty"`
}

type ListServiceUserConversationRequest struct {
	ServerURL   *string
	PathParams  ListServiceUserConversationPathParams
	QueryParams ListServiceUserConversationQueryParams
	Security    ListServiceUserConversationSecurity
}

type ListServiceUserConversationResponse struct {
	ContentType                         string
	ListServiceUserConversationResponse *ListServiceUserConversationListServiceUserConversationResponse
	StatusCode                          int64
}
