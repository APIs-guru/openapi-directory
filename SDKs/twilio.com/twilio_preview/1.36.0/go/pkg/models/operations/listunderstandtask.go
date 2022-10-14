package operations

import (
	"openapi/pkg/models/shared"
)

var ListUnderstandTaskServers = []string{
	"https://preview.twilio.com",
}

type ListUnderstandTaskPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type ListUnderstandTaskQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUnderstandTaskSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUnderstandTaskRequest struct {
	ServerURL   *string
	PathParams  ListUnderstandTaskPathParams
	QueryParams ListUnderstandTaskQueryParams
	Security    ListUnderstandTaskSecurity
}

type ListUnderstandTask200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListUnderstandTask200ApplicationJSONListUnderstandTaskResponse struct {
	Meta  *ListUnderstandTask200ApplicationJSONMeta `json:"meta,omitempty"`
	Tasks []shared.PreviewUnderstandAssistantTask   `json:"tasks,omitempty"`
}

type ListUnderstandTaskResponse struct {
	ContentType                string
	ListUnderstandTaskResponse *ListUnderstandTask200ApplicationJSONListUnderstandTaskResponse
	StatusCode                 int64
}
