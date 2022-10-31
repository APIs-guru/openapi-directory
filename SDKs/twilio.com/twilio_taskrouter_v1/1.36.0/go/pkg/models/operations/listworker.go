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

type ListWorkerListWorkerResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListWorkerListWorkerResponse struct {
	Meta    *ListWorkerListWorkerResponseMeta    `json:"meta,omitempty"`
	Workers []shared.TaskrouterV1WorkspaceWorker `json:"workers,omitempty"`
}

type ListWorkerResponse struct {
	ContentType        string
	ListWorkerResponse *ListWorkerListWorkerResponse
	StatusCode         int64
}
