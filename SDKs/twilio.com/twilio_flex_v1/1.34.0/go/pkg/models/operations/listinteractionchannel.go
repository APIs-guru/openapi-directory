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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListInteractionChannel200ApplicationJSONListInteractionChannelResponse struct {
	Channels []shared.FlexV1InteractionInteractionChannel  `json:"channels"`
	Meta     *ListInteractionChannel200ApplicationJSONMeta `json:"meta"`
}

type ListInteractionChannelResponse struct {
	ContentType                    string
	ListInteractionChannelResponse *ListInteractionChannel200ApplicationJSONListInteractionChannelResponse
	StatusCode                     int64
}
