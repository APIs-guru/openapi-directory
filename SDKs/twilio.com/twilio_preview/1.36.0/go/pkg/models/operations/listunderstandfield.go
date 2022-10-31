package operations

import (
	"openapi/pkg/models/shared"
)

var ListUnderstandFieldServers = []string{
	"https://preview.twilio.com",
}

type ListUnderstandFieldPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type ListUnderstandFieldQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUnderstandFieldSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUnderstandFieldRequest struct {
	ServerURL   *string
	PathParams  ListUnderstandFieldPathParams
	QueryParams ListUnderstandFieldQueryParams
	Security    ListUnderstandFieldSecurity
}

type ListUnderstandFieldListUnderstandFieldResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListUnderstandFieldListUnderstandFieldResponse struct {
	Fields []shared.PreviewUnderstandAssistantTaskField        `json:"fields,omitempty"`
	Meta   *ListUnderstandFieldListUnderstandFieldResponseMeta `json:"meta,omitempty"`
}

type ListUnderstandFieldResponse struct {
	ContentType                 string
	ListUnderstandFieldResponse *ListUnderstandFieldListUnderstandFieldResponse
	StatusCode                  int64
}
