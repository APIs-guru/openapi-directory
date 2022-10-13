package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceConversationMessageServers = []string{
	"https://conversations.twilio.com",
}

type ListServiceConversationMessagePathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type ListServiceConversationMessageQueryParams struct {
	Order    *shared.ServiceConversationMessageEnumOrderTypeEnum `queryParam:"style=form,explode=true,name=Order"`
	PageSize *int64                                              `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceConversationMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceConversationMessageRequest struct {
	ServerURL   *string
	PathParams  ListServiceConversationMessagePathParams
	QueryParams ListServiceConversationMessageQueryParams
	Security    ListServiceConversationMessageSecurity
}

type ListServiceConversationMessage200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListServiceConversationMessage200ApplicationJSONListServiceConversationMessageResponse struct {
	Messages []shared.ConversationsV1ServiceServiceConversationServiceConversationMessage `json:"messages"`
	Meta     *ListServiceConversationMessage200ApplicationJSONMeta                        `json:"meta"`
}

type ListServiceConversationMessageResponse struct {
	ContentType                            string
	ListServiceConversationMessageResponse *ListServiceConversationMessage200ApplicationJSONListServiceConversationMessageResponse
	StatusCode                             int64
}
