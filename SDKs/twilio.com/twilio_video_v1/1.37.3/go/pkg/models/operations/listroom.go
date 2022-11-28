package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListRoomServerList = []string{
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

type ListRoomListRoomResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListRoomListRoomResponse struct {
	Meta  *ListRoomListRoomResponseMeta `json:"meta,omitempty"`
	Rooms []shared.VideoV1Room          `json:"rooms,omitempty"`
}

type ListRoomRequest struct {
	ServerURL   *string
	QueryParams ListRoomQueryParams
	Security    ListRoomSecurity
}

type ListRoomResponse struct {
	ContentType      string
	ListRoomResponse *ListRoomListRoomResponse
	StatusCode       int64
}
