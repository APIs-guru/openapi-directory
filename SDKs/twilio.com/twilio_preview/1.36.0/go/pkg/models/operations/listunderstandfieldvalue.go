package operations

import (
	"openapi/pkg/models/shared"
)

var ListUnderstandFieldValueServers = []string{
	"https://preview.twilio.com",
}

type ListUnderstandFieldValuePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	FieldTypeSid string `pathParam:"style=simple,explode=false,name=FieldTypeSid"`
}

type ListUnderstandFieldValueQueryParams struct {
	Language *string `queryParam:"style=form,explode=true,name=Language"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUnderstandFieldValueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUnderstandFieldValueRequest struct {
	ServerURL   *string
	PathParams  ListUnderstandFieldValuePathParams
	QueryParams ListUnderstandFieldValueQueryParams
	Security    ListUnderstandFieldValueSecurity
}

type ListUnderstandFieldValue200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListUnderstandFieldValue200ApplicationJSONListUnderstandFieldValueResponse struct {
	FieldValues []shared.PreviewUnderstandAssistantFieldTypeFieldValue `json:"field_values"`
	Meta        *ListUnderstandFieldValue200ApplicationJSONMeta        `json:"meta"`
}

type ListUnderstandFieldValueResponse struct {
	ContentType                      string
	ListUnderstandFieldValueResponse *ListUnderstandFieldValue200ApplicationJSONListUnderstandFieldValueResponse
	StatusCode                       int64
}
