package operations

import (
	"openapi/pkg/models/shared"
)

var FetchRoomParticipantSubscribeRuleServerList = []string{
	"https://video.twilio.com",
}

type FetchRoomParticipantSubscribeRulePathParams struct {
	ParticipantSid string `pathParam:"style=simple,explode=false,name=ParticipantSid"`
	RoomSid        string `pathParam:"style=simple,explode=false,name=RoomSid"`
}

type FetchRoomParticipantSubscribeRuleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchRoomParticipantSubscribeRuleRequest struct {
	ServerURL  *string
	PathParams FetchRoomParticipantSubscribeRulePathParams
	Security   FetchRoomParticipantSubscribeRuleSecurity
}

type FetchRoomParticipantSubscribeRuleResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	VideoV1RoomRoomParticipantRoomParticipantSubscribeRule *shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule
}
