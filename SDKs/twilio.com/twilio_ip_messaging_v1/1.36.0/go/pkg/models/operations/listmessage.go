package operations

import (
	"openapi/pkg/models/shared"
)

var ListMessageServers = []string{
	"https://ip-messaging.twilio.com",
}

type ListMessagePathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListMessageQueryParams struct {
	Order    *shared.MessageEnumOrderTypeEnum `queryParam:"style=form,explode=true,name=Order"`
	PageSize *int64                           `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMessageRequest struct {
	ServerURL   *string
	PathParams  ListMessagePathParams
	QueryParams ListMessageQueryParams
	Security    ListMessageSecurity
}

type ListMessage200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListMessage200ApplicationJSONListMessageResponse struct {
	Messages []shared.IPMessagingV1ServiceChannelMessage `json:"messages"`
	Meta     *ListMessage200ApplicationJSONMeta          `json:"meta"`
}

type ListMessageResponse struct {
	ContentType         string
	ListMessageResponse *ListMessage200ApplicationJSONListMessageResponse
	StatusCode          int64
}
