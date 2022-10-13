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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListPlayerStreamer200ApplicationJSONListPlayerStreamerResponse struct {
	Meta            *ListPlayerStreamer200ApplicationJSONMeta `json:"meta"`
	PlayerStreamers []shared.MediaV1PlayerStreamer            `json:"player_streamers"`
}

type ListPlayerStreamerResponse struct {
	ContentType                string
	ListPlayerStreamerResponse *ListPlayerStreamer200ApplicationJSONListPlayerStreamerResponse
	StatusCode                 int64
}
