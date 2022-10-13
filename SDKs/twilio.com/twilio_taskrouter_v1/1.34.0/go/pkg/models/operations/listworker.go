package operations

import (
	"openapi/pkg/models/shared"
)

var ListWorkerServers = []string{
	"https://taskrouter.twilio.com",
}

type ListWorkerPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type ListWorkerQueryParams struct {
	ActivityName            *string `queryParam:"style=form,explode=true,name=ActivityName"`
	ActivitySid             *string `queryParam:"style=form,explode=true,name=ActivitySid"`
	Available               *string `queryParam:"style=form,explode=true,name=Available"`
	FriendlyName            *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize                *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	TargetWorkersExpression *string `queryParam:"style=form,explode=true,name=TargetWorkersExpression"`
	TaskQueueName           *string `queryParam:"style=form,explode=true,name=TaskQueueName"`
	TaskQueueSid            *string `queryParam:"style=form,explode=true,name=TaskQueueSid"`
}

type ListWorkerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListWorkerRequest struct {
	ServerURL   *string
	PathParams  ListWorkerPathParams
	QueryParams ListWorkerQueryParams
	Security    ListWorkerSecurity
}

type ListWorker200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListWorker200ApplicationJSONListWorkerResponse struct {
	Meta    *ListWorker200ApplicationJSONMeta    `json:"meta"`
	Workers []shared.TaskrouterV1WorkspaceWorker `json:"workers"`
}

type ListWorkerResponse struct {
	ContentType        string
	ListWorkerResponse *ListWorker200ApplicationJSONListWorkerResponse
	StatusCode         int64
}
