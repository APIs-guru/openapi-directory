package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var FetchTaskQueueStatisticsServerList = []string{
	"https://taskrouter.twilio.com",
}

type FetchTaskQueueStatisticsPathParams struct {
	TaskQueueSid string `pathParam:"style=simple,explode=false,name=TaskQueueSid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchTaskQueueStatisticsQueryParams struct {
	EndDate         *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	Minutes         *int64     `queryParam:"style=form,explode=true,name=Minutes"`
	SplitByWaitTime *string    `queryParam:"style=form,explode=true,name=SplitByWaitTime"`
	StartDate       *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
	TaskChannel     *string    `queryParam:"style=form,explode=true,name=TaskChannel"`
}

type FetchTaskQueueStatisticsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTaskQueueStatisticsRequest struct {
	ServerURL   *string
	PathParams  FetchTaskQueueStatisticsPathParams
	QueryParams FetchTaskQueueStatisticsQueryParams
	Security    FetchTaskQueueStatisticsSecurity
}

type FetchTaskQueueStatisticsResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics *shared.TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics
}
