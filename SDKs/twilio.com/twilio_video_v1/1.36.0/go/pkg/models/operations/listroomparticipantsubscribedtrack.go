package operations

import (
	"openapi/pkg/models/shared"
)

var ListRoomParticipantSubscribedTrackServers = []string{
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

type ListRoomParticipantSubscribedTrackRequest struct {
	ServerURL   *string
	PathParams  ListRoomParticipantSubscribedTrackPathParams
	QueryParams ListRoomParticipantSubscribedTrackQueryParams
	Security    ListRoomParticipantSubscribedTrackSecurity
}

type ListRoomParticipantSubscribedTrack200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListRoomParticipantSubscribedTrack200ApplicationJSONListRoomParticipantSubscribedTrackResponse struct {
	Meta             *ListRoomParticipantSubscribedTrack200ApplicationJSONMeta         `json:"meta"`
	SubscribedTracks []shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack `json:"subscribed_tracks"`
}

type ListRoomParticipantSubscribedTrackResponse struct {
	ContentType                                string
	ListRoomParticipantSubscribedTrackResponse *ListRoomParticipantSubscribedTrack200ApplicationJSONListRoomParticipantSubscribedTrackResponse
	StatusCode                                 int64
}
