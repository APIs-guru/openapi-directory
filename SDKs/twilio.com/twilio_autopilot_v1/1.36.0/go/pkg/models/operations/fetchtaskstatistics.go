package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTaskStatisticsServers = []string{
	"https://autopilot.twilio.com",
}

type FetchTaskStatisticsPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type FetchTaskStatisticsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTaskStatisticsRequest struct {
	ServerURL  *string
	PathParams FetchTaskStatisticsPathParams
	Security   FetchTaskStatisticsSecurity
}

type FetchTaskStatisticsResponse struct {
	ContentType                            string
	StatusCode                             int64
	AutopilotV1AssistantTaskTaskStatistics *shared.AutopilotV1AssistantTaskTaskStatistics
}
