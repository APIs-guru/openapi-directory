package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateRoomParticipantSubscribeRuleServerList = []string{
	"https://video.twilio.com",
}

type UpdateRoomParticipantSubscribeRulePathParams struct {
	ParticipantSid string `pathParam:"style=simple,explode=false,name=ParticipantSid"`
	RoomSid        string `pathParam:"style=simple,explode=false,name=RoomSid"`
}

type UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest struct {
	Rules *interface{} `form:"name=Rules"`
}

type UpdateRoomParticipantSubscribeRuleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateRoomParticipantSubscribeRuleRequest struct {
	ServerURL  *string
	PathParams UpdateRoomParticipantSubscribeRulePathParams
	Request    *UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateRoomParticipantSubscribeRuleSecurity
}

type UpdateRoomParticipantSubscribeRuleResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	VideoV1RoomRoomParticipantRoomParticipantSubscribeRule *shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule
}
