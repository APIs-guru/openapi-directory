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
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListTask200ApplicationJSONListTaskResponse struct {
	Meta  *ListTask200ApplicationJSONMeta   `json:"meta,omitempty"`
	Tasks []shared.AutopilotV1AssistantTask `json:"tasks,omitempty"`
}

type ListTaskResponse struct {
	ContentType      string
	ListTaskResponse *ListTask200ApplicationJSONListTaskResponse
	StatusCode       int64
}
