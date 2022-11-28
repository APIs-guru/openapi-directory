package operations

import (
	"openapi/pkg/models/shared"
)

var FetchVideoParticipantSummaryServerList = []string{
	"https://insights.twilio.com",
}

type FetchVideoParticipantSummaryPathParams struct {
	ParticipantSid string `pathParam:"style=simple,explode=false,name=ParticipantSid"`
	RoomSid        string `pathParam:"style=simple,explode=false,name=RoomSid"`
}

type FetchVideoParticipantSummarySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchVideoParticipantSummaryRequest struct {
	ServerURL  *string
	PathParams FetchVideoParticipantSummaryPathParams
	Security   FetchVideoParticipantSummarySecurity
}

type FetchVideoParticipantSummaryResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	InsightsV1VideoRoomSummaryVideoParticipantSummary *shared.InsightsV1VideoRoomSummaryVideoParticipantSummary
}
