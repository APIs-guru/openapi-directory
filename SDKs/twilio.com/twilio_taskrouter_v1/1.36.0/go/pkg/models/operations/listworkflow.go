package operations

import (
	"openapi/pkg/models/shared"
)

var ListWorkflowServers = []string{
	"https://taskrouter.twilio.com",
}

type ListWorkflowPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type ListWorkflowQueryParams struct {
	FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListWorkflowSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListWorkflowRequest struct {
	ServerURL   *string
	PathParams  ListWorkflowPathParams
	QueryParams ListWorkflowQueryParams
	Security    ListWorkflowSecurity
}

type ListWorkflow200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListWorkflow200ApplicationJSONListWorkflowResponse struct {
	Meta      *ListWorkflow200ApplicationJSONMeta    `json:"meta"`
	Workflows []shared.TaskrouterV1WorkspaceWorkflow `json:"workflows"`
}

type ListWorkflowResponse struct {
	ContentType          string
	ListWorkflowResponse *ListWorkflow200ApplicationJSONListWorkflowResponse
	StatusCode           int64
}
