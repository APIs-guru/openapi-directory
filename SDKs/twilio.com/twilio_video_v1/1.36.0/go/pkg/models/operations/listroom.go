package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListRoomServers = []string{
	"https://video.twilio.com",
}

type ListRoomQueryParams struct {
	DateCreatedAfter  *time.Time                     `queryParam:"style=form,explode=true,name=DateCreatedAfter"`
	DateCreatedBefore *time.Time                     `queryParam:"style=form,explode=true,name=DateCreatedBefore"`
	PageSize          *int64                         `queryParam:"style=form,explode=true,name=PageSize"`
	Status            *shared.RoomEnumRoomStatusEnum `queryParam:"style=form,explode=true,name=Status"`
	UniqueName        *string                        `queryParam:"style=form,explode=true,name=UniqueName"`
}

type ListRoomSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRoomRequest struct {
	ServerURL   *string
	QueryParams ListRoomQueryParams
	Security    ListRoomSecurity
}

type ListRoom200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListRoom200ApplicationJSONListRoomResponse struct {
	Meta  *ListRoom200ApplicationJSONMeta `json:"meta"`
	Rooms []shared.VideoV1Room            `json:"rooms"`
}

type ListRoomResponse struct {
	ContentType      string
	ListRoomResponse *ListRoom200ApplicationJSONListRoomResponse
	StatusCode       int64
}
