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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSourceIPMapping200ApplicationJSONListSourceIPMappingResponse struct {
	Meta             *ListSourceIPMapping200ApplicationJSONMeta `json:"meta"`
	SourceIPMappings []shared.VoiceV1SourceIPMapping            `json:"source_ip_mappings"`
}

type ListSourceIPMappingResponse struct {
	ContentType                 string
	ListSourceIPMappingResponse *ListSourceIPMapping200ApplicationJSONListSourceIPMappingResponse
	StatusCode                  int64
}
