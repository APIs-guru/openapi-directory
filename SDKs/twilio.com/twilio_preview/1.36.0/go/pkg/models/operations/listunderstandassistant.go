package operations

import (
	"openapi/pkg/models/shared"
)

var ListUnderstandAssistantServers = []string{
	"https://preview.twilio.com",
}

type ListUnderstandAssistantQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUnderstandAssistantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUnderstandAssistantRequest struct {
	ServerURL   *string
	QueryParams ListUnderstandAssistantQueryParams
	Security    ListUnderstandAssistantSecurity
}

type ListUnderstandAssistant200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListUnderstandAssistant200ApplicationJSONListUnderstandAssistantResponse struct {
	Assistants []shared.PreviewUnderstandAssistant            `json:"assistants,omitempty"`
	Meta       *ListUnderstandAssistant200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListUnderstandAssistantResponse struct {
	ContentType                     string
	ListUnderstandAssistantResponse *ListUnderstandAssistant200ApplicationJSONListUnderstandAssistantResponse
	StatusCode                      int64
}
