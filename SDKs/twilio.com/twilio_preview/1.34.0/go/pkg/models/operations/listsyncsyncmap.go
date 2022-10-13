package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncSyncMapServers = []string{
	"https://preview.twilio.com",
}

type ListSyncSyncMapPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncSyncMapQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncSyncMapSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncSyncMapRequest struct {
	ServerURL   *string
	PathParams  ListSyncSyncMapPathParams
	QueryParams ListSyncSyncMapQueryParams
	Security    ListSyncSyncMapSecurity
}

type ListSyncSyncMap200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncSyncMap200ApplicationJSONListSyncSyncMapResponse struct {
	Maps []shared.PreviewSyncServiceSyncMap     `json:"maps"`
	Meta *ListSyncSyncMap200ApplicationJSONMeta `json:"meta"`
}

type ListSyncSyncMapResponse struct {
	ContentType             string
	ListSyncSyncMapResponse *ListSyncSyncMap200ApplicationJSONListSyncSyncMapResponse
	StatusCode              int64
}
