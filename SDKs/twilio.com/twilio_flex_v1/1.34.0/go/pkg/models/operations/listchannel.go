package operations

import (
	"openapi/pkg/models/shared"
)

var ListChannelServers = []string{
	"https://flex-api.twilio.com",
}

type ListChannelQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListChannelRequest struct {
	ServerURL   *string
	QueryParams ListChannelQueryParams
	Security    ListChannelSecurity
}

type ListChannel200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListChannel200ApplicationJSONListChannelResponse struct {
	FlexChatChannels []shared.FlexV1Channel             `json:"flex_chat_channels"`
	Meta             *ListChannel200ApplicationJSONMeta `json:"meta"`
}

type ListChannelResponse struct {
	ContentType         string
	ListChannelResponse *ListChannel200ApplicationJSONListChannelResponse
	StatusCode          int64
}
