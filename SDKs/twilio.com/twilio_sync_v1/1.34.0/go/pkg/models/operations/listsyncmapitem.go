package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncMapItemServers = []string{
	"https://sync.twilio.com",
}

type ListSyncMapItemPathParams struct {
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncMapItemQueryParams struct {
	Bounds   *shared.SyncMapItemEnumQueryFromBoundTypeEnum `queryParam:"style=form,explode=true,name=Bounds"`
	From     *string                                       `queryParam:"style=form,explode=true,name=From"`
	Order    *shared.SyncMapItemEnumQueryResultOrderEnum   `queryParam:"style=form,explode=true,name=Order"`
	PageSize *int64                                        `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncMapItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncMapItemRequest struct {
	ServerURL   *string
	PathParams  ListSyncMapItemPathParams
	QueryParams ListSyncMapItemQueryParams
	Security    ListSyncMapItemSecurity
}

type ListSyncMapItem200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncMapItem200ApplicationJSONListSyncMapItemResponse struct {
	Items []shared.SyncV1ServiceSyncMapSyncMapItem `json:"items"`
	Meta  *ListSyncMapItem200ApplicationJSONMeta   `json:"meta"`
}

type ListSyncMapItemResponse struct {
	ContentType             string
	ListSyncMapItemResponse *ListSyncMapItem200ApplicationJSONListSyncMapItemResponse
	StatusCode              int64
}
