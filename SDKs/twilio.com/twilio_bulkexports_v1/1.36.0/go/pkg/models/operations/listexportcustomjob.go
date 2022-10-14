package operations

import (
	"openapi/pkg/models/shared"
)

var ListExportCustomJobServers = []string{
	"https://bulkexports.twilio.com",
}

type ListExportCustomJobPathParams struct {
	ResourceType string `pathParam:"style=simple,explode=false,name=ResourceType"`
}

type ListExportCustomJobQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListExportCustomJobSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListExportCustomJobRequest struct {
	ServerURL   *string
	PathParams  ListExportCustomJobPathParams
	QueryParams ListExportCustomJobQueryParams
	Security    ListExportCustomJobSecurity
}

type ListExportCustomJob200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListExportCustomJob200ApplicationJSONListExportCustomJobResponse struct {
	Jobs []shared.BulkexportsV1ExportExportCustomJob `json:"jobs,omitempty"`
	Meta *ListExportCustomJob200ApplicationJSONMeta  `json:"meta,omitempty"`
}

type ListExportCustomJobResponse struct {
	ContentType                 string
	ListExportCustomJobResponse *ListExportCustomJob200ApplicationJSONListExportCustomJobResponse
	StatusCode                  int64
}
