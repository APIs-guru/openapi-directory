package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncSyncListServers = []string{
	"https://preview.twilio.com",
}

type ListSyncSyncListPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncSyncListQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncSyncListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncSyncListRequest struct {
	ServerURL   *string
	PathParams  ListSyncSyncListPathParams
	QueryParams ListSyncSyncListQueryParams
	Security    ListSyncSyncListSecurity
}

type ListSyncSyncList200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncSyncList200ApplicationJSONListSyncSyncListResponse struct {
	Lists []shared.PreviewSyncServiceSyncList     `json:"lists"`
	Meta  *ListSyncSyncList200ApplicationJSONMeta `json:"meta"`
}

type ListSyncSyncListResponse struct {
	ContentType              string
	ListSyncSyncListResponse *ListSyncSyncList200ApplicationJSONListSyncSyncListResponse
	StatusCode               int64
}
