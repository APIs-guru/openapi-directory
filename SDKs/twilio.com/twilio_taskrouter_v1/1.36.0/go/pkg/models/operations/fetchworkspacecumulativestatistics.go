package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var FetchWorkspaceCumulativeStatisticsServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkspaceCumulativeStatisticsPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchWorkspaceCumulativeStatisticsQueryParams struct {
	EndDate         *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	Minutes         *int64     `queryParam:"style=form,explode=true,name=Minutes"`
	SplitByWaitTime *string    `queryParam:"style=form,explode=true,name=SplitByWaitTime"`
	StartDate       *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
	TaskChannel     *string    `queryParam:"style=form,explode=true,name=TaskChannel"`
}

type FetchWorkspaceCumulativeStatisticsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWorkspaceCumulativeStatisticsRequest struct {
	ServerURL   *string
	PathParams  FetchWorkspaceCumulativeStatisticsPathParams
	QueryParams FetchWorkspaceCumulativeStatisticsQueryParams
	Security    FetchWorkspaceCumulativeStatisticsSecurity
}

type FetchWorkspaceCumulativeStatisticsResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	TaskrouterV1WorkspaceWorkspaceCumulativeStatistics *shared.TaskrouterV1WorkspaceWorkspaceCumulativeStatistics
}
