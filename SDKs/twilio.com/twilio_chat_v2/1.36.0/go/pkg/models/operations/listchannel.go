package operations

import (
	"openapi/pkg/models/shared"
)

var ListChannelServers = []string{
	"https://chat.twilio.com",
}

type ListChannelPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListChannelQueryParams struct {
	PageSize *int64                              `queryParam:"style=form,explode=true,name=PageSize"`
	Type     []shared.ChannelEnumChannelTypeEnum `queryParam:"style=form,explode=true,name=Type"`
}

type ListChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListChannelRequest struct {
	ServerURL   *string
	PathParams  ListChannelPathParams
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
	Channels []shared.ChatV2ServiceChannel      `json:"channels"`
	Meta     *ListChannel200ApplicationJSONMeta `json:"meta"`
}

type ListChannelResponse struct {
	ContentType         string
	ListChannelResponse *ListChannel200ApplicationJSONListChannelResponse
	StatusCode          int64
}
