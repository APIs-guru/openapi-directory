package operations

import (
	"openapi/pkg/models/shared"
)

var ListPlayerStreamerServers = []string{
	"https://media.twilio.com",
}

type ListPlayerStreamerQueryParams struct {
	Order    *shared.PlayerStreamerEnumOrderEnum  `queryParam:"style=form,explode=true,name=Order"`
	PageSize *int64                               `queryParam:"style=form,explode=true,name=PageSize"`
	Status   *shared.PlayerStreamerEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListPlayerStreamerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListPlayerStreamerRequest struct {
	ServerURL   *string
	QueryParams ListPlayerStreamerQueryParams
	Security    ListPlayerStreamerSecurity
}

type ListPlayerStreamer200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListPlayerStreamer200ApplicationJSONListPlayerStreamerResponse struct {
	Meta            *ListPlayerStreamer200ApplicationJSONMeta `json:"meta,omitempty"`
	PlayerStreamers []shared.MediaV1PlayerStreamer            `json:"player_streamers,omitempty"`
}

type ListPlayerStreamerResponse struct {
	ContentType                string
	ListPlayerStreamerResponse *ListPlayerStreamer200ApplicationJSONListPlayerStreamerResponse
	StatusCode                 int64
}
