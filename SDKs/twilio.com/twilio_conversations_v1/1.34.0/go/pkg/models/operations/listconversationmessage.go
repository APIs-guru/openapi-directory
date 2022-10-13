package operations

import (
	"openapi/pkg/models/shared"
)

var ListConversationMessageServers = []string{
	"https://conversations.twilio.com",
}

type ListConversationMessagePathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type ListConversationMessageQueryParams struct {
	Order    *shared.ConversationMessageEnumOrderTypeEnum `queryParam:"style=form,explode=true,name=Order"`
	PageSize *int64                                       `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListConversationMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConversationMessageRequest struct {
	ServerURL   *string
	PathParams  ListConversationMessagePathParams
	QueryParams ListConversationMessageQueryParams
	Security    ListConversationMessageSecurity
}

type ListConversationMessage200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListConversationMessage200ApplicationJSONListConversationMessageResponse struct {
	Messages []shared.ConversationsV1ConversationConversationMessage `json:"messages"`
	Meta     *ListConversationMessage200ApplicationJSONMeta          `json:"meta"`
}

type ListConversationMessageResponse struct {
	ContentType                     string
	ListConversationMessageResponse *ListConversationMessage200ApplicationJSONListConversationMessageResponse
	StatusCode                      int64
}
