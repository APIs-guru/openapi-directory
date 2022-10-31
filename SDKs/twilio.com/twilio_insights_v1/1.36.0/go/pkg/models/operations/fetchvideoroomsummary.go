package operations

import (
	"openapi/pkg/models/shared"
)

var FetchVideoRoomSummaryServers = []string{
	"https://insights.twilio.com",
}

type FetchVideoRoomSummaryPathParams struct {
	RoomSid string `pathParam:"style=simple,explode=false,name=RoomSid"`
}

type FetchVideoRoomSummarySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchVideoRoomSummaryRequest struct {
	ServerURL  *string
	PathParams FetchVideoRoomSummaryPathParams
	Security   FetchVideoRoomSummarySecurity
}

type FetchVideoRoomSummaryResponse struct {
	ContentType                string
	StatusCode                 int64
	InsightsV1VideoRoomSummary *shared.InsightsV1VideoRoomSummary
}
