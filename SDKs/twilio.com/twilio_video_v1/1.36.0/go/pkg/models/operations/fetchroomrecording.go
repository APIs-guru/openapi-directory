package operations

import (
	"openapi/pkg/models/shared"
)

var FetchRoomRecordingServers = []string{
	"https://video.twilio.com",
}

type FetchRoomRecordingPathParams struct {
	RoomSid string `pathParam:"style=simple,explode=false,name=RoomSid"`
	Sid     string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchRoomRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchRoomRecordingRequest struct {
	ServerURL  *string
	PathParams FetchRoomRecordingPathParams
	Security   FetchRoomRecordingSecurity
}

type FetchRoomRecordingResponse struct {
	ContentType              string
	StatusCode               int64
	VideoV1RoomRoomRecording *shared.VideoV1RoomRoomRecording
}
