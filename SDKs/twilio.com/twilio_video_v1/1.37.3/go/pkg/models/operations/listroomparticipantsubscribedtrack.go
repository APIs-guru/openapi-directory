package operations

import (
	"openapi/pkg/models/shared"
)

var ListRoomParticipantSubscribedTrackServerList = []string{
	"https://video.twilio.com",
}

type ListRoomParticipantSubscribedTrackPathParams struct {
	ParticipantSid string `pathParam:"style=simple,explode=false,name=ParticipantSid"`
	RoomSid        string `pathParam:"style=simple,explode=false,name=RoomSid"`
}

type ListRoomParticipantSubscribedTrackQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListRoomParticipantSubscribedTrackSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse struct {
	Meta             *ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta `json:"meta,omitempty"`
	SubscribedTracks []shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack                 `json:"subscribed_tracks,omitempty"`
}

type ListRoomParticipantSubscribedTrackRequest struct {
	ServerURL   *string
	PathParams  ListRoomParticipantSubscribedTrackPathParams
	QueryParams ListRoomParticipantSubscribedTrackQueryParams
	Security    ListRoomParticipantSubscribedTrackSecurity
}

type ListRoomParticipantSubscribedTrackResponse struct {
	ContentType                                string
	ListRoomParticipantSubscribedTrackResponse *ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse
	StatusCode                                 int64
}
