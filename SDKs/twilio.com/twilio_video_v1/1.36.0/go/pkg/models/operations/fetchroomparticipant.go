package operations

import (
"openapi/pkg/models/shared")
var FetchRoomParticipantServers = []string{
	"https://video.twilio.com",
}

type FetchRoomParticipantPathParams struct {
    RoomSid string `pathParam:"style=simple,explode=false,name=RoomSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchRoomParticipantSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchRoomParticipantRequest struct {
    ServerURL *string 
    PathParams FetchRoomParticipantPathParams 
    Security FetchRoomParticipantSecurity 
    
}

type FetchRoomParticipantResponse struct {
    ContentType string 
    StatusCode int64 
    VideoV1RoomRoomParticipant *shared.VideoV1RoomRoomParticipant 
    
}

