package operations

import (
	"openapi/pkg/models/shared"
)

var FetchRoomParticipantSubscribedTrackServerList = []string{
	"https://video.twilio.com",
}

type FetchRoomParticipantSubscribedTrackPathParams struct {
	ParticipantSid string `pathParam:"style=simple,explode=false,name=ParticipantSid"`
	RoomSid        string `pathParam:"style=simple,explode=false,name=RoomSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchRoomParticipantSubscribedTrackSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchRoomParticipantSubscribedTrackRequest struct {
	ServerURL  *string
	PathParams FetchRoomParticipantSubscribedTrackPathParams
	Security   FetchRoomParticipantSubscribedTrackSecurity
}

type FetchRoomParticipantSubscribedTrackResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack *shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack
}
