package operations

import (
	"openapi/pkg/models/shared"
)

var ListSourceIPMappingServers = []string{
	"https://voice.twilio.com",
}

type ListSourceIPMappingQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSourceIPMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSourceIPMappingRequest struct {
	ServerURL   *string
	QueryParams ListSourceIPMappingQueryParams
	Security    ListSourceIPMappingSecurity
}

type ListSourceIPMapping200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSourceIPMapping200ApplicationJSONListSourceIPMappingResponse struct {
	Meta             *ListSourceIPMapping200ApplicationJSONMeta `json:"meta,omitempty"`
	SourceIPMappings []shared.VoiceV1SourceIPMapping            `json:"source_ip_mappings,omitempty"`
}

type ListSourceIPMappingResponse struct {
	ContentType                 string
	ListSourceIPMappingResponse *ListSourceIPMapping200ApplicationJSONListSourceIPMappingResponse
	StatusCode                  int64
}
