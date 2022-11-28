package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateRoomParticipantServerList = []string{
	"https://video.twilio.com",
}

type UpdateRoomParticipantPathParams struct {
	RoomSid string `pathParam:"style=simple,explode=false,name=RoomSid"`
	Sid     string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateRoomParticipantUpdateRoomParticipantRequest struct {
	Status *shared.RoomParticipantEnumStatusEnum `form:"name=Status"`
}

type UpdateRoomParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateRoomParticipantRequest struct {
	ServerURL  *string
	PathParams UpdateRoomParticipantPathParams
	Request    *UpdateRoomParticipantUpdateRoomParticipantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateRoomParticipantSecurity
}

type UpdateRoomParticipantResponse struct {
	ContentType                string
	StatusCode                 int64
	VideoV1RoomRoomParticipant *shared.VideoV1RoomRoomParticipant
}
