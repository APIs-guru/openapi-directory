package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListRoomParticipantServerList = []string{
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

type ListRoomParticipantListRoomParticipantResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListRoomParticipantListRoomParticipantResponse struct {
	Meta         *ListRoomParticipantListRoomParticipantResponseMeta `json:"meta,omitempty"`
	Participants []shared.VideoV1RoomRoomParticipant                 `json:"participants,omitempty"`
}

type ListRoomParticipantRequest struct {
	ServerURL   *string
	PathParams  ListRoomParticipantPathParams
	QueryParams ListRoomParticipantQueryParams
	Security    ListRoomParticipantSecurity
}

type ListRoomParticipantResponse struct {
	ContentType                 string
	ListRoomParticipantResponse *ListRoomParticipantListRoomParticipantResponse
	StatusCode                  int64
}
