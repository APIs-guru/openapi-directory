package operations

import (
	"openapi/pkg/models/shared"
)

var ListUnderstandFieldTypeServerList = []string{
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

type ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListUnderstandFieldTypeListUnderstandFieldTypeResponse struct {
	FieldTypes []shared.PreviewUnderstandAssistantFieldType                `json:"field_types,omitempty"`
	Meta       *ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta `json:"meta,omitempty"`
}

type ListUnderstandFieldTypeRequest struct {
	ServerURL   *string
	PathParams  ListUnderstandFieldTypePathParams
	QueryParams ListUnderstandFieldTypeQueryParams
	Security    ListUnderstandFieldTypeSecurity
}

type ListUnderstandFieldTypeResponse struct {
	ContentType                     string
	ListUnderstandFieldTypeResponse *ListUnderstandFieldTypeListUnderstandFieldTypeResponse
	StatusCode                      int64
}
