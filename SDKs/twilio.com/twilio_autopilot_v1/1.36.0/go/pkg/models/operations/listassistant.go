package operations

import (
	"openapi/pkg/models/shared"
)

var ListAssistantServers = []string{
	"https://autopilot.twilio.com",
}

type ListAssistantQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListAssistantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAssistantRequest struct {
	ServerURL   *string
	QueryParams ListAssistantQueryParams
	Security    ListAssistantSecurity
}

type ListAssistant200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListAssistant200ApplicationJSONListAssistantResponse struct {
	Assistants []shared.AutopilotV1Assistant        `json:"assistants,omitempty"`
	Meta       *ListAssistant200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListAssistantResponse struct {
	ContentType           string
	ListAssistantResponse *ListAssistant200ApplicationJSONListAssistantResponse
	StatusCode            int64
}
