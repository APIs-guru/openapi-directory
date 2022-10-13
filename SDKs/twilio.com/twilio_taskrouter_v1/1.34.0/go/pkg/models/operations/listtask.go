package operations

import (
	"openapi/pkg/models/shared"
)

var ListTaskServers = []string{
	"https://taskrouter.twilio.com",
}

type ListTaskPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type ListTaskQueryParams struct {
	AssignmentStatus       []string `queryParam:"style=form,explode=true,name=AssignmentStatus"`
	EvaluateTaskAttributes *string  `queryParam:"style=form,explode=true,name=EvaluateTaskAttributes"`
	HasAddons              *bool    `queryParam:"style=form,explode=true,name=HasAddons"`
	Ordering               *string  `queryParam:"style=form,explode=true,name=Ordering"`
	PageSize               *int64   `queryParam:"style=form,explode=true,name=PageSize"`
	Priority               *int64   `queryParam:"style=form,explode=true,name=Priority"`
	TaskQueueName          *string  `queryParam:"style=form,explode=true,name=TaskQueueName"`
	TaskQueueSid           *string  `queryParam:"style=form,explode=true,name=TaskQueueSid"`
	WorkflowName           *string  `queryParam:"style=form,explode=true,name=WorkflowName"`
	WorkflowSid            *string  `queryParam:"style=form,explode=true,name=WorkflowSid"`
}

type ListTaskSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTaskRequest struct {
	ServerURL   *string
	PathParams  ListTaskPathParams
	QueryParams ListTaskQueryParams
	Security    ListTaskSecurity
}

type ListTask200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListTask200ApplicationJSONListTaskResponse struct {
	Meta  *ListTask200ApplicationJSONMeta    `json:"meta"`
	Tasks []shared.TaskrouterV1WorkspaceTask `json:"tasks"`
}

type ListTaskResponse struct {
	ContentType      string
	ListTaskResponse *ListTask200ApplicationJSONListTaskResponse
	StatusCode       int64
}
