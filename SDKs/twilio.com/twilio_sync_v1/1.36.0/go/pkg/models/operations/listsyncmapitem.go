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

type ListSyncMapItemListSyncMapItemResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncMapItemListSyncMapItemResponse struct {
	Items []shared.SyncV1ServiceSyncMapSyncMapItem    `json:"items,omitempty"`
	Meta  *ListSyncMapItemListSyncMapItemResponseMeta `json:"meta,omitempty"`
}

type ListSyncMapItemResponse struct {
	ContentType             string
	ListSyncMapItemResponse *ListSyncMapItemListSyncMapItemResponse
	StatusCode              int64
}
