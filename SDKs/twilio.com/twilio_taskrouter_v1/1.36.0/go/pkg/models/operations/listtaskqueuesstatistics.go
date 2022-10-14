package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListTaskQueuesStatisticsServers = []string{
	"https://taskrouter.twilio.com",
}

type ListTaskQueuesStatisticsPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type ListTaskQueuesStatisticsQueryParams struct {
	EndDate         *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	FriendlyName    *string    `queryParam:"style=form,explode=true,name=FriendlyName"`
	Minutes         *int64     `queryParam:"style=form,explode=true,name=Minutes"`
	PageSize        *int64     `queryParam:"style=form,explode=true,name=PageSize"`
	SplitByWaitTime *string    `queryParam:"style=form,explode=true,name=SplitByWaitTime"`
	StartDate       *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
	TaskChannel     *string    `queryParam:"style=form,explode=true,name=TaskChannel"`
}

type ListTaskQueuesStatisticsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTaskQueuesStatisticsRequest struct {
	ServerURL   *string
	PathParams  ListTaskQueuesStatisticsPathParams
	QueryParams ListTaskQueuesStatisticsQueryParams
	Security    ListTaskQueuesStatisticsSecurity
}

type ListTaskQueuesStatistics200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListTaskQueuesStatistics200ApplicationJSONListTaskQueuesStatisticsResponse struct {
	Meta                 *ListTaskQueuesStatistics200ApplicationJSONMeta             `json:"meta,omitempty"`
	TaskQueuesStatistics []shared.TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics `json:"task_queues_statistics,omitempty"`
}

type ListTaskQueuesStatisticsResponse struct {
	ContentType                      string
	ListTaskQueuesStatisticsResponse *ListTaskQueuesStatistics200ApplicationJSONListTaskQueuesStatisticsResponse
	StatusCode                       int64
}
