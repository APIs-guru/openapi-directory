package operations

import (
	"openapi/pkg/models/shared"
)

var ListDayServers = []string{
	"https://bulkexports.twilio.com",
}

type ListDayPathParams struct {
	ResourceType string `pathParam:"style=simple,explode=false,name=ResourceType"`
}

type ListDayQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDaySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDayRequest struct {
	ServerURL   *string
	PathParams  ListDayPathParams
	QueryParams ListDayQueryParams
	Security    ListDaySecurity
}

type ListDay200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListDay200ApplicationJSONListDayResponse struct {
	Days []shared.BulkexportsV1ExportDay `json:"days"`
	Meta *ListDay200ApplicationJSONMeta  `json:"meta"`
}

type ListDayResponse struct {
	ContentType     string
	ListDayResponse *ListDay200ApplicationJSONListDayResponse
	StatusCode      int64
}
