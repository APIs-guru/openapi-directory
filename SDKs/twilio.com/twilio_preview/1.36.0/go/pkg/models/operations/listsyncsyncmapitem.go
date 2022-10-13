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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncSyncMapItem200ApplicationJSONListSyncSyncMapItemResponse struct {
	Items []shared.PreviewSyncServiceSyncMapSyncMapItem `json:"items"`
	Meta  *ListSyncSyncMapItem200ApplicationJSONMeta    `json:"meta"`
}

type ListSyncSyncMapItemResponse struct {
	ContentType                 string
	ListSyncSyncMapItemResponse *ListSyncSyncMapItem200ApplicationJSONListSyncSyncMapItemResponse
	StatusCode                  int64
}
