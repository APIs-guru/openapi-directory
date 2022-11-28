package operations

import (
	"openapi/pkg/models/shared"
)

var ListChannelServerList = []string{
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

type ListChannelListChannelResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListChannelListChannelResponse struct {
	Channels []shared.ChatV2ServiceChannel       `json:"channels,omitempty"`
	Meta     *ListChannelListChannelResponseMeta `json:"meta,omitempty"`
}

type ListChannelRequest struct {
	ServerURL   *string
	PathParams  ListChannelPathParams
	QueryParams ListChannelQueryParams
	Security    ListChannelSecurity
}

type ListChannelResponse struct {
	ContentType         string
	ListChannelResponse *ListChannelListChannelResponse
	StatusCode          int64
}
