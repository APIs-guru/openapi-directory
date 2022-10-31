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

type ListDayListDayResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListDayListDayResponse struct {
	Days []shared.BulkexportsV1ExportDay `json:"days,omitempty"`
	Meta *ListDayListDayResponseMeta     `json:"meta,omitempty"`
}

type ListDayResponse struct {
	ContentType     string
	ListDayResponse *ListDayListDayResponse
	StatusCode      int64
}
