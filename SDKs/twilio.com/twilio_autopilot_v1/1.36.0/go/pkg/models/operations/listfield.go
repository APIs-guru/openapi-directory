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

type ListField200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListField200ApplicationJSONListFieldResponse struct {
	Fields []shared.AutopilotV1AssistantTaskField `json:"fields"`
	Meta   *ListField200ApplicationJSONMeta       `json:"meta"`
}

type ListFieldResponse struct {
	ContentType       string
	ListFieldResponse *ListField200ApplicationJSONListFieldResponse
	StatusCode        int64
}
