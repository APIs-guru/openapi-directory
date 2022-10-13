package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncServiceServers = []string{
	"https://preview.twilio.com",
}

type ListSyncServiceQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncServiceRequest struct {
	ServerURL   *string
	QueryParams ListSyncServiceQueryParams
	Security    ListSyncServiceSecurity
}

type ListSyncService200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncService200ApplicationJSONListSyncServiceResponse struct {
	Meta     *ListSyncService200ApplicationJSONMeta `json:"meta"`
	Services []shared.PreviewSyncService            `json:"services"`
}

type ListSyncServiceResponse struct {
	ContentType             string
	ListSyncServiceResponse *ListSyncService200ApplicationJSONListSyncServiceResponse
	StatusCode              int64
}
