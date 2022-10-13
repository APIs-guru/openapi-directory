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

type ListUnderstandField200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListUnderstandField200ApplicationJSONListUnderstandFieldResponse struct {
	Fields []shared.PreviewUnderstandAssistantTaskField `json:"fields"`
	Meta   *ListUnderstandField200ApplicationJSONMeta   `json:"meta"`
}

type ListUnderstandFieldResponse struct {
	ContentType                 string
	ListUnderstandFieldResponse *ListUnderstandField200ApplicationJSONListUnderstandFieldResponse
	StatusCode                  int64
}
