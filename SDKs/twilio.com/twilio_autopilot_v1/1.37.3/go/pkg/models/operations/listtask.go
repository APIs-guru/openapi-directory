package operations

import (
	"openapi/pkg/models/shared"
)

var ListTaskServerList = []string{
	"https://autopilot.twilio.com",
}

type ListTaskPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type ListTaskQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListTaskSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTaskListTaskResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListTaskListTaskResponse struct {
	Meta  *ListTaskListTaskResponseMeta     `json:"meta,omitempty"`
	Tasks []shared.AutopilotV1AssistantTask `json:"tasks,omitempty"`
}

type ListTaskRequest struct {
	ServerURL   *string
	PathParams  ListTaskPathParams
	QueryParams ListTaskQueryParams
	Security    ListTaskSecurity
}

type ListTaskResponse struct {
	ContentType      string
	ListTaskResponse *ListTaskListTaskResponse
	StatusCode       int64
}
