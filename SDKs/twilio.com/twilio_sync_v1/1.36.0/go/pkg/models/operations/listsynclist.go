package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncListServers = []string{
	"https://sync.twilio.com",
}

type ListSyncListPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncListQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncListRequest struct {
	ServerURL   *string
	PathParams  ListSyncListPathParams
	QueryParams ListSyncListQueryParams
	Security    ListSyncListSecurity
}

type ListSyncList200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncList200ApplicationJSONListSyncListResponse struct {
	Lists []shared.SyncV1ServiceSyncList      `json:"lists,omitempty"`
	Meta  *ListSyncList200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListSyncListResponse struct {
	ContentType          string
	ListSyncListResponse *ListSyncList200ApplicationJSONListSyncListResponse
	StatusCode           int64
}
