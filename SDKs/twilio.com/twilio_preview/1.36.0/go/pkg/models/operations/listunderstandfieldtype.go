package operations

import (
	"openapi/pkg/models/shared"
)

var ListUnderstandFieldTypeServers = []string{
	"https://preview.twilio.com",
}

type ListUnderstandFieldTypePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type ListUnderstandFieldTypeQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUnderstandFieldTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUnderstandFieldTypeRequest struct {
	ServerURL   *string
	PathParams  ListUnderstandFieldTypePathParams
	QueryParams ListUnderstandFieldTypeQueryParams
	Security    ListUnderstandFieldTypeSecurity
}

type ListUnderstandFieldType200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListUnderstandFieldType200ApplicationJSONListUnderstandFieldTypeResponse struct {
	FieldTypes []shared.PreviewUnderstandAssistantFieldType   `json:"field_types"`
	Meta       *ListUnderstandFieldType200ApplicationJSONMeta `json:"meta"`
}

type ListUnderstandFieldTypeResponse struct {
	ContentType                     string
	ListUnderstandFieldTypeResponse *ListUnderstandFieldType200ApplicationJSONListUnderstandFieldTypeResponse
	StatusCode                      int64
}
