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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListFieldValue200ApplicationJSONListFieldValueResponse struct {
	FieldValues []shared.AutopilotV1AssistantFieldTypeFieldValue `json:"field_values"`
	Meta        *ListFieldValue200ApplicationJSONMeta            `json:"meta"`
}

type ListFieldValueResponse struct {
	ContentType            string
	ListFieldValueResponse *ListFieldValue200ApplicationJSONListFieldValueResponse
	StatusCode             int64
}
