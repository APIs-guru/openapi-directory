package operations

import (
	"openapi/pkg/models/shared"
)

var ListFieldServers = []string{
	"https://autopilot.twilio.com",
}

type ListFieldPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type ListFieldQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListFieldSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListFieldRequest struct {
	ServerURL   *string
	PathParams  ListFieldPathParams
	QueryParams ListFieldQueryParams
	Security    ListFieldSecurity
}

type ListFieldListFieldResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListFieldListFieldResponse struct {
	Fields []shared.AutopilotV1AssistantTaskField `json:"fields,omitempty"`
	Meta   *ListFieldListFieldResponseMeta        `json:"meta,omitempty"`
}

type ListFieldResponse struct {
	ContentType       string
	ListFieldResponse *ListFieldListFieldResponse
	StatusCode        int64
}
