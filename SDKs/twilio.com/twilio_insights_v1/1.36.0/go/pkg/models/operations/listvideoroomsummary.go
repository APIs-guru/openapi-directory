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

type ListVideoRoomSummaryListVideoRoomSummaryResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListVideoRoomSummaryListVideoRoomSummaryResponse struct {
	Meta  *ListVideoRoomSummaryListVideoRoomSummaryResponseMeta `json:"meta,omitempty"`
	Rooms []shared.InsightsV1VideoRoomSummary                   `json:"rooms,omitempty"`
}

type ListVideoRoomSummaryResponse struct {
	ContentType                  string
	ListVideoRoomSummaryResponse *ListVideoRoomSummaryListVideoRoomSummaryResponse
	StatusCode                   int64
}
