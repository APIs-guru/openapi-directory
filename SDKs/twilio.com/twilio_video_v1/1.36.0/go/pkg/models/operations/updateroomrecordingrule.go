package operations

import (
"openapi/pkg/models/shared")
var UpdateRoomRecordingRuleServers = []string{
	"https://video.twilio.com",
}

type UpdateRoomRecordingRulePathParams struct {
    RoomSid string `pathParam:"style=simple,explode=false,name=RoomSid"`
    
}

type UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest struct {
    Rules *interface{} `form:"name=Rules"`
    
}

type UpdateRoomRecordingRuleSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateRoomRecordingRuleRequest struct {
    ServerURL *string 
    PathParams UpdateRoomRecordingRulePathParams 
    Request *UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateRoomRecordingRuleSecurity 
    
}

type UpdateRoomRecordingRuleResponse struct {
    ContentType string 
    StatusCode int64 
    VideoV1RoomRoomRecordingRule *shared.VideoV1RoomRoomRecordingRule 
    
}

