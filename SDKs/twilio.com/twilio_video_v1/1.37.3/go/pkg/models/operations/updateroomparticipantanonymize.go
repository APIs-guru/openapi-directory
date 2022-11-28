package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateRoomParticipantAnonymizeServerList = []string{
	"https://video.twilio.com",
}

type UpdateRoomParticipantAnonymizePathParams struct {
	RoomSid string `pathParam:"style=simple,explode=false,name=RoomSid"`
	Sid     string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateRoomParticipantAnonymizeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateRoomParticipantAnonymizeRequest struct {
	ServerURL  *string
	PathParams UpdateRoomParticipantAnonymizePathParams
	Security   UpdateRoomParticipantAnonymizeSecurity
}

type UpdateRoomParticipantAnonymizeResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	VideoV1RoomRoomParticipantRoomParticipantAnonymize *shared.VideoV1RoomRoomParticipantRoomParticipantAnonymize
}
