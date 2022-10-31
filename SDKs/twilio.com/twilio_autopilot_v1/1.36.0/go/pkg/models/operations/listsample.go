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

type ListSampleListSampleResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSampleListSampleResponse struct {
	Meta    *ListSampleListSampleResponseMeta       `json:"meta,omitempty"`
	Samples []shared.AutopilotV1AssistantTaskSample `json:"samples,omitempty"`
}

type ListSampleResponse struct {
	ContentType        string
	ListSampleResponse *ListSampleListSampleResponse
	StatusCode         int64
}
