package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUnderstandTaskStatisticsServerList = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandTaskStatisticsPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type FetchUnderstandTaskStatisticsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUnderstandTaskStatisticsRequest struct {
	ServerURL  *string
	PathParams FetchUnderstandTaskStatisticsPathParams
	Security   FetchUnderstandTaskStatisticsSecurity
}

type FetchUnderstandTaskStatisticsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	PreviewUnderstandAssistantTaskTaskStatistics *shared.PreviewUnderstandAssistantTaskTaskStatistics
}
