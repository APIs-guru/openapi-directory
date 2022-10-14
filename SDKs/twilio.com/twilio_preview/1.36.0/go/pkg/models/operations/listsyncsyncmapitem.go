package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncSyncMapItemServers = []string{
	"https://preview.twilio.com",
}

type ListSyncSyncMapItemPathParams struct {
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncSyncMapItemQueryParams struct {
	Bounds   *shared.SyncMapItemEnumQueryFromBoundTypeEnum `queryParam:"style=form,explode=true,name=Bounds"`
	From     *string                                       `queryParam:"style=form,explode=true,name=From"`
	Order    *shared.SyncMapItemEnumQueryResultOrderEnum   `queryParam:"style=form,explode=true,name=Order"`
	PageSize *int64                                        `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncSyncMapItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncSyncMapItemRequest struct {
	ServerURL   *string
	PathParams  ListSyncSyncMapItemPathParams
	QueryParams ListSyncSyncMapItemQueryParams
	Security    ListSyncSyncMapItemSecurity
}

type ListSyncSyncMapItem200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncSyncMapItem200ApplicationJSONListSyncSyncMapItemResponse struct {
	Items []shared.PreviewSyncServiceSyncMapSyncMapItem `json:"items,omitempty"`
	Meta  *ListSyncSyncMapItem200ApplicationJSONMeta    `json:"meta,omitempty"`
}

type ListSyncSyncMapItemResponse struct {
	ContentType                 string
	ListSyncSyncMapItemResponse *ListSyncSyncMapItem200ApplicationJSONListSyncSyncMapItemResponse
	StatusCode                  int64
}
