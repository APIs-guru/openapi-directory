package operations

import (
	"openapi/pkg/models/shared"
)

var ListTaskServers = []string{
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
	Meta  *ListTask200ApplicationJSONMeta   `json:"meta"`
	Tasks []shared.AutopilotV1AssistantTask `json:"tasks"`
}

type ListTaskResponse struct {
	ContentType      string
	ListTaskResponse *ListTask200ApplicationJSONListTaskResponse
	StatusCode       int64
}
