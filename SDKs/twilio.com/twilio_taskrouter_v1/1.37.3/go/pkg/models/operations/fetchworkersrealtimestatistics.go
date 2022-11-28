package operations

import (
	"openapi/pkg/models/shared"
)

var FetchWorkersRealTimeStatisticsServerList = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkersRealTimeStatisticsPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchWorkersRealTimeStatisticsQueryParams struct {
	TaskChannel *string `queryParam:"style=form,explode=true,name=TaskChannel"`
}

type FetchWorkersRealTimeStatisticsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWorkersRealTimeStatisticsRequest struct {
	ServerURL   *string
	PathParams  FetchWorkersRealTimeStatisticsPathParams
	QueryParams FetchWorkersRealTimeStatisticsQueryParams
	Security    FetchWorkersRealTimeStatisticsSecurity
}

type FetchWorkersRealTimeStatisticsResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics *shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics
}
