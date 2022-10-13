package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncMapServers = []string{
	"https://sync.twilio.com",
}

type ListSyncMapPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncMapQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncMapSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncMapRequest struct {
	ServerURL   *string
	PathParams  ListSyncMapPathParams
	QueryParams ListSyncMapQueryParams
	Security    ListSyncMapSecurity
}

type ListSyncMap200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncMap200ApplicationJSONListSyncMapResponse struct {
	Maps []shared.SyncV1ServiceSyncMap      `json:"maps"`
	Meta *ListSyncMap200ApplicationJSONMeta `json:"meta"`
}

type ListSyncMapResponse struct {
	ContentType         string
	ListSyncMapResponse *ListSyncMap200ApplicationJSONListSyncMapResponse
	StatusCode          int64
}
