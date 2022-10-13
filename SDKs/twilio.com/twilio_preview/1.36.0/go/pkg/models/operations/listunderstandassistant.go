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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListUnderstandAssistant200ApplicationJSONListUnderstandAssistantResponse struct {
	Assistants []shared.PreviewUnderstandAssistant            `json:"assistants"`
	Meta       *ListUnderstandAssistant200ApplicationJSONMeta `json:"meta"`
}

type ListUnderstandAssistantResponse struct {
	ContentType                     string
	ListUnderstandAssistantResponse *ListUnderstandAssistant200ApplicationJSONListUnderstandAssistantResponse
	StatusCode                      int64
}
