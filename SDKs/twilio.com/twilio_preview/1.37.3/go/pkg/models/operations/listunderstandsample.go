package operations

import (
	"openapi/pkg/models/shared"
)

var ListUnderstandSampleServerList = []string{
	"https://preview.twilio.com",
}

type ListUnderstandSamplePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type ListUnderstandSampleQueryParams struct {
	Language *string `queryParam:"style=form,explode=true,name=Language"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUnderstandSampleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUnderstandSampleListUnderstandSampleResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListUnderstandSampleListUnderstandSampleResponse struct {
	Meta    *ListUnderstandSampleListUnderstandSampleResponseMeta `json:"meta,omitempty"`
	Samples []shared.PreviewUnderstandAssistantTaskSample         `json:"samples,omitempty"`
}

type ListUnderstandSampleRequest struct {
	ServerURL   *string
	PathParams  ListUnderstandSamplePathParams
	QueryParams ListUnderstandSampleQueryParams
	Security    ListUnderstandSampleSecurity
}

type ListUnderstandSampleResponse struct {
	ContentType                  string
	ListUnderstandSampleResponse *ListUnderstandSampleListUnderstandSampleResponse
	StatusCode                   int64
}
