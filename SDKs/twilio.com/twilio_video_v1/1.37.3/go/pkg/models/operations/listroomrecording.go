package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListRoomRecordingServerList = []string{
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

type ListRoomRecordingListRoomRecordingResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListRoomRecordingListRoomRecordingResponse struct {
	Meta       *ListRoomRecordingListRoomRecordingResponseMeta `json:"meta,omitempty"`
	Recordings []shared.VideoV1RoomRoomRecording               `json:"recordings,omitempty"`
}

type ListRoomRecordingRequest struct {
	ServerURL   *string
	PathParams  ListRoomRecordingPathParams
	QueryParams ListRoomRecordingQueryParams
	Security    ListRoomRecordingSecurity
}

type ListRoomRecordingResponse struct {
	ContentType               string
	ListRoomRecordingResponse *ListRoomRecordingListRoomRecordingResponse
	StatusCode                int64
}
