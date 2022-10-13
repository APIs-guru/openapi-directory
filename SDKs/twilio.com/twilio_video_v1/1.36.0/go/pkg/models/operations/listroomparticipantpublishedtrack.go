package operations

import (
	"openapi/pkg/models/shared"
)

var ListRoomParticipantPublishedTrackServers = []string{
	"https://video.twilio.com",
}

type ListRoomParticipantPublishedTrackPathParams struct {
	ParticipantSid string `pathParam:"style=simple,explode=false,name=ParticipantSid"`
	RoomSid        string `pathParam:"style=simple,explode=false,name=RoomSid"`
}

type ListRoomParticipantPublishedTrackQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListRoomParticipantPublishedTrackSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRoomParticipantPublishedTrackRequest struct {
	ServerURL   *string
	PathParams  ListRoomParticipantPublishedTrackPathParams
	QueryParams ListRoomParticipantPublishedTrackQueryParams
	Security    ListRoomParticipantPublishedTrackSecurity
}

type ListRoomParticipantPublishedTrack200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListRoomParticipantPublishedTrack200ApplicationJSONListRoomParticipantPublishedTrackResponse struct {
	Meta            *ListRoomParticipantPublishedTrack200ApplicationJSONMeta         `json:"meta"`
	PublishedTracks []shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack `json:"published_tracks"`
}

type ListRoomParticipantPublishedTrackResponse struct {
	ContentType                               string
	ListRoomParticipantPublishedTrackResponse *ListRoomParticipantPublishedTrack200ApplicationJSONListRoomParticipantPublishedTrackResponse
	StatusCode                                int64
}
