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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListAssistant200ApplicationJSONListAssistantResponse struct {
	Assistants []shared.AutopilotV1Assistant        `json:"assistants"`
	Meta       *ListAssistant200ApplicationJSONMeta `json:"meta"`
}

type ListAssistantResponse struct {
	ContentType           string
	ListAssistantResponse *ListAssistant200ApplicationJSONListAssistantResponse
	StatusCode            int64
}
