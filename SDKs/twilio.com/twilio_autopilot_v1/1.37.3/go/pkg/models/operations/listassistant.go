package operations

import (
	"openapi/pkg/models/shared"
)

var ListAssistantServerList = []string{
	"https://autopilot.twilio.com",
}

type ListAssistantQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListAssistantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAssistantListAssistantResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListAssistantListAssistantResponse struct {
	Assistants []shared.AutopilotV1Assistant           `json:"assistants,omitempty"`
	Meta       *ListAssistantListAssistantResponseMeta `json:"meta,omitempty"`
}

type ListAssistantRequest struct {
	ServerURL   *string
	QueryParams ListAssistantQueryParams
	Security    ListAssistantSecurity
}

type ListAssistantResponse struct {
	ContentType           string
	ListAssistantResponse *ListAssistantListAssistantResponse
	StatusCode            int64
}
