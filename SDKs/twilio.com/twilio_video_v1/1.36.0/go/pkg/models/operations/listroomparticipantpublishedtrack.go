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
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListRoomParticipantPublishedTrack200ApplicationJSONListRoomParticipantPublishedTrackResponse struct {
	Meta            *ListRoomParticipantPublishedTrack200ApplicationJSONMeta         `json:"meta,omitempty"`
	PublishedTracks []shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack `json:"published_tracks,omitempty"`
}

type ListRoomParticipantPublishedTrackResponse struct {
	ContentType                               string
	ListRoomParticipantPublishedTrackResponse *ListRoomParticipantPublishedTrack200ApplicationJSONListRoomParticipantPublishedTrackResponse
	StatusCode                                int64
}
