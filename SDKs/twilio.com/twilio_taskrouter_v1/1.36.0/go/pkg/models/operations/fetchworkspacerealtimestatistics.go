package operations

import (
	"openapi/pkg/models/shared"
)

var FetchWorkspaceRealTimeStatisticsServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkspaceRealTimeStatisticsPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchWorkspaceRealTimeStatisticsQueryParams struct {
	TaskChannel *string `queryParam:"style=form,explode=true,name=TaskChannel"`
}

type FetchWorkspaceRealTimeStatisticsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWorkspaceRealTimeStatisticsRequest struct {
	ServerURL   *string
	PathParams  FetchWorkspaceRealTimeStatisticsPathParams
	QueryParams FetchWorkspaceRealTimeStatisticsQueryParams
	Security    FetchWorkspaceRealTimeStatisticsSecurity
}

type FetchWorkspaceRealTimeStatisticsResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	TaskrouterV1WorkspaceWorkspaceRealTimeStatistics *shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics
}
