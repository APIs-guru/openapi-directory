package operations

import (
	"openapi/pkg/models/shared"
)

var ListTaskQueueServers = []string{
	"https://taskrouter.twilio.com",
}

type ListTaskQueuePathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type ListTaskQueueQueryParams struct {
	EvaluateWorkerAttributes *string `queryParam:"style=form,explode=true,name=EvaluateWorkerAttributes"`
	FriendlyName             *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize                 *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	WorkerSid                *string `queryParam:"style=form,explode=true,name=WorkerSid"`
}

type ListTaskQueueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTaskQueueRequest struct {
	ServerURL   *string
	PathParams  ListTaskQueuePathParams
	QueryParams ListTaskQueueQueryParams
	Security    ListTaskQueueSecurity
}

type ListTaskQueue200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListTaskQueue200ApplicationJSONListTaskQueueResponse struct {
	Meta       *ListTaskQueue200ApplicationJSONMeta    `json:"meta"`
	TaskQueues []shared.TaskrouterV1WorkspaceTaskQueue `json:"task_queues"`
}

type ListTaskQueueResponse struct {
	ContentType           string
	ListTaskQueueResponse *ListTaskQueue200ApplicationJSONListTaskQueueResponse
	StatusCode            int64
}
