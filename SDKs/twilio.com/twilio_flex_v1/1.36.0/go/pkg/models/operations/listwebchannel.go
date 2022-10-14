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
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListWebChannel200ApplicationJSONListWebChannelResponse struct {
	FlexChatChannels []shared.FlexV1WebChannel             `json:"flex_chat_channels,omitempty"`
	Meta             *ListWebChannel200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListWebChannelResponse struct {
	ContentType            string
	ListWebChannelResponse *ListWebChannel200ApplicationJSONListWebChannelResponse
	StatusCode             int64
}
