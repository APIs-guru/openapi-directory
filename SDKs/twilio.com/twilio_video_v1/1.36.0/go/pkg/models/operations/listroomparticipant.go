package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListRoomParticipantServers = []string{
	"https://video.twilio.com",
}

type ListRoomParticipantPathParams struct {
	RoomSid string `pathParam:"style=simple,explode=false,name=RoomSid"`
}

type ListRoomParticipantQueryParams struct {
	DateCreatedAfter  *time.Time                            `queryParam:"style=form,explode=true,name=DateCreatedAfter"`
	DateCreatedBefore *time.Time                            `queryParam:"style=form,explode=true,name=DateCreatedBefore"`
	Identity          *string                               `queryParam:"style=form,explode=true,name=Identity"`
	PageSize          *int64                                `queryParam:"style=form,explode=true,name=PageSize"`
	Status            *shared.RoomParticipantEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListRoomParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRoomParticipantRequest struct {
	ServerURL   *string
	PathParams  ListRoomParticipantPathParams
	QueryParams ListRoomParticipantQueryParams
	Security    ListRoomParticipantSecurity
}

type ListRoomParticipant200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListRoomParticipant200ApplicationJSONListRoomParticipantResponse struct {
	Meta         *ListRoomParticipant200ApplicationJSONMeta `json:"meta,omitempty"`
	Participants []shared.VideoV1RoomRoomParticipant        `json:"participants,omitempty"`
}

type ListRoomParticipantResponse struct {
	ContentType                 string
	ListRoomParticipantResponse *ListRoomParticipant200ApplicationJSONListRoomParticipantResponse
	StatusCode                  int64
}
