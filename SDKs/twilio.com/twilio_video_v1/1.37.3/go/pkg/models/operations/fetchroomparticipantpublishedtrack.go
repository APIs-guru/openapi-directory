package operations

import (
	"openapi/pkg/models/shared"
)

var FetchRoomParticipantPublishedTrackServerList = []string{
	"https://video.twilio.com",
}

type FetchRoomParticipantPublishedTrackPathParams struct {
	ParticipantSid string `pathParam:"style=simple,explode=false,name=ParticipantSid"`
	RoomSid        string `pathParam:"style=simple,explode=false,name=RoomSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchRoomParticipantPublishedTrackSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchRoomParticipantPublishedTrackRequest struct {
	ServerURL  *string
	PathParams FetchRoomParticipantPublishedTrackPathParams
	Security   FetchRoomParticipantPublishedTrackSecurity
}

type FetchRoomParticipantPublishedTrackResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	VideoV1RoomRoomParticipantRoomParticipantPublishedTrack *shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack
}
