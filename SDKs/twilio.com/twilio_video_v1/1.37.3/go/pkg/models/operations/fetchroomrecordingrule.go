package operations

import (
	"openapi/pkg/models/shared"
)

var FetchRoomRecordingRuleServerList = []string{
	"https://video.twilio.com",
}

type FetchRoomRecordingRulePathParams struct {
	RoomSid string `pathParam:"style=simple,explode=false,name=RoomSid"`
}

type FetchRoomRecordingRuleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchRoomRecordingRuleRequest struct {
	ServerURL  *string
	PathParams FetchRoomRecordingRulePathParams
	Security   FetchRoomRecordingRuleSecurity
}

type FetchRoomRecordingRuleResponse struct {
	ContentType                  string
	StatusCode                   int64
	VideoV1RoomRoomRecordingRule *shared.VideoV1RoomRoomRecordingRule
}
