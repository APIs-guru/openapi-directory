package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var FetchWorkflowCumulativeStatisticsServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkflowCumulativeStatisticsPathParams struct {
	WorkflowSid  string `pathParam:"style=simple,explode=false,name=WorkflowSid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchWorkflowCumulativeStatisticsQueryParams struct {
	EndDate         *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	Minutes         *int64     `queryParam:"style=form,explode=true,name=Minutes"`
	SplitByWaitTime *string    `queryParam:"style=form,explode=true,name=SplitByWaitTime"`
	StartDate       *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
	TaskChannel     *string    `queryParam:"style=form,explode=true,name=TaskChannel"`
}

type FetchWorkflowCumulativeStatisticsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWorkflowCumulativeStatisticsRequest struct {
	ServerURL   *string
	PathParams  FetchWorkflowCumulativeStatisticsPathParams
	QueryParams FetchWorkflowCumulativeStatisticsQueryParams
	Security    FetchWorkflowCumulativeStatisticsSecurity
}

type FetchWorkflowCumulativeStatisticsResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics *shared.TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics
}
