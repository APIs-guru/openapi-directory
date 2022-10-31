package operations

import (
"openapi/pkg/models/shared")
var DeleteRoomRecordingServers = []string{
	"https://video.twilio.com",
}

type DeleteRoomRecordingPathParams struct {
    RoomSid string `pathParam:"style=simple,explode=false,name=RoomSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteRoomRecordingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteRoomRecordingRequest struct {
    ServerURL *string 
    PathParams DeleteRoomRecordingPathParams 
    Security DeleteRoomRecordingSecurity 
    
}

type DeleteRoomRecordingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

