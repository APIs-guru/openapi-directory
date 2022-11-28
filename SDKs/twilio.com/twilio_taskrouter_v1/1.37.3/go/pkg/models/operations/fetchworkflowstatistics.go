package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var FetchWorkflowStatisticsServerList = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkflowStatisticsPathParams struct {
	WorkflowSid  string `pathParam:"style=simple,explode=false,name=WorkflowSid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchWorkflowStatisticsQueryParams struct {
	EndDate         *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	Minutes         *int64     `queryParam:"style=form,explode=true,name=Minutes"`
	SplitByWaitTime *string    `queryParam:"style=form,explode=true,name=SplitByWaitTime"`
	StartDate       *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
	TaskChannel     *string    `queryParam:"style=form,explode=true,name=TaskChannel"`
}

type FetchWorkflowStatisticsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWorkflowStatisticsRequest struct {
	ServerURL   *string
	PathParams  FetchWorkflowStatisticsPathParams
	QueryParams FetchWorkflowStatisticsQueryParams
	Security    FetchWorkflowStatisticsSecurity
}

type FetchWorkflowStatisticsResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	TaskrouterV1WorkspaceWorkflowWorkflowStatistics *shared.TaskrouterV1WorkspaceWorkflowWorkflowStatistics
}
