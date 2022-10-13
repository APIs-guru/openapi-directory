package operations

import (
	"openapi/pkg/models/shared"
)

var ListFieldTypeServers = []string{
	"https://autopilot.twilio.com",
}

type ListFieldTypePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type ListFieldTypeQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListFieldTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListFieldTypeRequest struct {
	ServerURL   *string
	PathParams  ListFieldTypePathParams
	QueryParams ListFieldTypeQueryParams
	Security    ListFieldTypeSecurity
}

type ListFieldType200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListFieldType200ApplicationJSONListFieldTypeResponse struct {
	FieldTypes []shared.AutopilotV1AssistantFieldType `json:"field_types"`
	Meta       *ListFieldType200ApplicationJSONMeta   `json:"meta"`
}

type ListFieldTypeResponse struct {
	ContentType           string
	ListFieldTypeResponse *ListFieldType200ApplicationJSONListFieldTypeResponse
	StatusCode            int64
}
