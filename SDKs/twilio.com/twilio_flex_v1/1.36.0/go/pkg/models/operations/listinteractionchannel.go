package operations

import (
	"openapi/pkg/models/shared"
)

var ListInteractionChannelServers = []string{
	"https://flex-api.twilio.com",
}

type ListInteractionChannelPathParams struct {
	InteractionSid string `pathParam:"style=simple,explode=false,name=InteractionSid"`
}

type ListInteractionChannelQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListInteractionChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListInteractionChannelRequest struct {
	ServerURL   *string
	PathParams  ListInteractionChannelPathParams
	QueryParams ListInteractionChannelQueryParams
	Security    ListInteractionChannelSecurity
}

type ListInteractionChannel200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListInteractionChannel200ApplicationJSONListInteractionChannelResponse struct {
	Channels []shared.FlexV1InteractionInteractionChannel  `json:"channels,omitempty"`
	Meta     *ListInteractionChannel200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListInteractionChannelResponse struct {
	ContentType                    string
	ListInteractionChannelResponse *ListInteractionChannel200ApplicationJSONListInteractionChannelResponse
	StatusCode                     int64
}
