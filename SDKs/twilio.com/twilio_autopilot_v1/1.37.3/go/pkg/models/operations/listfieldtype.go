package operations

import (
	"openapi/pkg/models/shared"
)

var ListFieldTypeServerList = []string{
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

type ListFieldTypeListFieldTypeResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListFieldTypeListFieldTypeResponse struct {
	FieldTypes []shared.AutopilotV1AssistantFieldType  `json:"field_types,omitempty"`
	Meta       *ListFieldTypeListFieldTypeResponseMeta `json:"meta,omitempty"`
}

type ListFieldTypeRequest struct {
	ServerURL   *string
	PathParams  ListFieldTypePathParams
	QueryParams ListFieldTypeQueryParams
	Security    ListFieldTypeSecurity
}

type ListFieldTypeResponse struct {
	ContentType           string
	ListFieldTypeResponse *ListFieldTypeListFieldTypeResponse
	StatusCode            int64
}
