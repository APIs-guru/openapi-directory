package operations

import (
	"openapi/pkg/models/shared"
)

var ListSampleServers = []string{
	"https://autopilot.twilio.com",
}

type ListSamplePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type ListSampleQueryParams struct {
	Language *string `queryParam:"style=form,explode=true,name=Language"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSampleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSampleRequest struct {
	ServerURL   *string
	PathParams  ListSamplePathParams
	QueryParams ListSampleQueryParams
	Security    ListSampleSecurity
}

type ListSample200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSample200ApplicationJSONListSampleResponse struct {
	Meta    *ListSample200ApplicationJSONMeta       `json:"meta"`
	Samples []shared.AutopilotV1AssistantTaskSample `json:"samples"`
}

type ListSampleResponse struct {
	ContentType        string
	ListSampleResponse *ListSample200ApplicationJSONListSampleResponse
	StatusCode         int64
}
