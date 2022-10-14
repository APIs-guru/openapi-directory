package operations

import (
	"openapi/pkg/models/shared"
)

var ListFieldValueServers = []string{
	"https://autopilot.twilio.com",
}

type ListFieldValuePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	FieldTypeSid string `pathParam:"style=simple,explode=false,name=FieldTypeSid"`
}

type ListFieldValueQueryParams struct {
	Language *string `queryParam:"style=form,explode=true,name=Language"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListFieldValueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListFieldValueRequest struct {
	ServerURL   *string
	PathParams  ListFieldValuePathParams
	QueryParams ListFieldValueQueryParams
	Security    ListFieldValueSecurity
}

type ListFieldValue200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListFieldValue200ApplicationJSONListFieldValueResponse struct {
	FieldValues []shared.AutopilotV1AssistantFieldTypeFieldValue `json:"field_values,omitempty"`
	Meta        *ListFieldValue200ApplicationJSONMeta            `json:"meta,omitempty"`
}

type ListFieldValueResponse struct {
	ContentType            string
	ListFieldValueResponse *ListFieldValue200ApplicationJSONListFieldValueResponse
	StatusCode             int64
}
