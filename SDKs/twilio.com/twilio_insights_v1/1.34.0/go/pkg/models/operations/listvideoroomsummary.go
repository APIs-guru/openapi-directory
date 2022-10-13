package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListVideoRoomSummaryServers = []string{
	"https://insights.twilio.com",
}

type ListVideoRoomSummaryQueryParams struct {
	Codec         []shared.VideoRoomSummaryEnumCodecEnum    `queryParam:"style=form,explode=true,name=Codec"`
	CreatedAfter  *time.Time                                `queryParam:"style=form,explode=true,name=CreatedAfter"`
	CreatedBefore *time.Time                                `queryParam:"style=form,explode=true,name=CreatedBefore"`
	PageSize      *int64                                    `queryParam:"style=form,explode=true,name=PageSize"`
	RoomName      *string                                   `queryParam:"style=form,explode=true,name=RoomName"`
	RoomType      []shared.VideoRoomSummaryEnumRoomTypeEnum `queryParam:"style=form,explode=true,name=RoomType"`
}

type ListVideoRoomSummarySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListVideoRoomSummaryRequest struct {
	ServerURL   *string
	QueryParams ListVideoRoomSummaryQueryParams
	Security    ListVideoRoomSummarySecurity
}

type ListVideoRoomSummary200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListVideoRoomSummary200ApplicationJSONListVideoRoomSummaryResponse struct {
	Meta  *ListVideoRoomSummary200ApplicationJSONMeta `json:"meta"`
	Rooms []shared.InsightsV1VideoRoomSummary         `json:"rooms"`
}

type ListVideoRoomSummaryResponse struct {
	ContentType                  string
	ListVideoRoomSummaryResponse *ListVideoRoomSummary200ApplicationJSONListVideoRoomSummaryResponse
	StatusCode                   int64
}
