package operations

import (
	"openapi/pkg/models/shared"
)

var ListWebChannelServers = []string{
	"https://flex-api.twilio.com",
}

type ListWebChannelQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListWebChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListWebChannelRequest struct {
	ServerURL   *string
	QueryParams ListWebChannelQueryParams
	Security    ListWebChannelSecurity
}

type ListWebChannel200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListWebChannel200ApplicationJSONListWebChannelResponse struct {
	FlexChatChannels []shared.FlexV1WebChannel             `json:"flex_chat_channels"`
	Meta             *ListWebChannel200ApplicationJSONMeta `json:"meta"`
}

type ListWebChannelResponse struct {
	ContentType            string
	ListWebChannelResponse *ListWebChannel200ApplicationJSONListWebChannelResponse
	StatusCode             int64
}
