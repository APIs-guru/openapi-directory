package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListRoomRecordingServers = []string{
	"https://video.twilio.com",
}

type ListRoomRecordingPathParams struct {
	RoomSid string `pathParam:"style=simple,explode=false,name=RoomSid"`
}

type ListRoomRecordingQueryParams struct {
	DateCreatedAfter  *time.Time                          `queryParam:"style=form,explode=true,name=DateCreatedAfter"`
	DateCreatedBefore *time.Time                          `queryParam:"style=form,explode=true,name=DateCreatedBefore"`
	PageSize          *int64                              `queryParam:"style=form,explode=true,name=PageSize"`
	SourceSid         *string                             `queryParam:"style=form,explode=true,name=SourceSid"`
	Status            *shared.RoomRecordingEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListRoomRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRoomRecordingRequest struct {
	ServerURL   *string
	PathParams  ListRoomRecordingPathParams
	QueryParams ListRoomRecordingQueryParams
	Security    ListRoomRecordingSecurity
}

type ListRoomRecording200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListRoomRecording200ApplicationJSONListRoomRecordingResponse struct {
	Meta       *ListRoomRecording200ApplicationJSONMeta `json:"meta,omitempty"`
	Recordings []shared.VideoV1RoomRoomRecording        `json:"recordings,omitempty"`
}

type ListRoomRecordingResponse struct {
	ContentType               string
	ListRoomRecordingResponse *ListRoomRecording200ApplicationJSONListRoomRecordingResponse
	StatusCode                int64
}
