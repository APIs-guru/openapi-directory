package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var FetchWorkspaceStatisticsServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkspaceStatisticsPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchWorkspaceStatisticsQueryParams struct {
	EndDate         *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	Minutes         *int64     `queryParam:"style=form,explode=true,name=Minutes"`
	SplitByWaitTime *string    `queryParam:"style=form,explode=true,name=SplitByWaitTime"`
	StartDate       *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
	TaskChannel     *string    `queryParam:"style=form,explode=true,name=TaskChannel"`
}

type FetchWorkspaceStatisticsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWorkspaceStatisticsRequest struct {
	ServerURL   *string
	PathParams  FetchWorkspaceStatisticsPathParams
	QueryParams FetchWorkspaceStatisticsQueryParams
	Security    FetchWorkspaceStatisticsSecurity
}

type FetchWorkspaceStatisticsResponse struct {
	ContentType                              string
	StatusCode                               int64
	TaskrouterV1WorkspaceWorkspaceStatistics *shared.TaskrouterV1WorkspaceWorkspaceStatistics
}
