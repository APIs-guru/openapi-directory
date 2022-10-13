package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var FetchWorkerInstanceStatisticsServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkerInstanceStatisticsPathParams struct {
	WorkerSid    string `pathParam:"style=simple,explode=false,name=WorkerSid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchWorkerInstanceStatisticsQueryParams struct {
	EndDate     *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	Minutes     *int64     `queryParam:"style=form,explode=true,name=Minutes"`
	StartDate   *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
	TaskChannel *string    `queryParam:"style=form,explode=true,name=TaskChannel"`
}

type FetchWorkerInstanceStatisticsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWorkerInstanceStatisticsRequest struct {
	ServerURL   *string
	PathParams  FetchWorkerInstanceStatisticsPathParams
	QueryParams FetchWorkerInstanceStatisticsQueryParams
	Security    FetchWorkerInstanceStatisticsSecurity
}

type FetchWorkerInstanceStatisticsResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics *shared.TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics
}
