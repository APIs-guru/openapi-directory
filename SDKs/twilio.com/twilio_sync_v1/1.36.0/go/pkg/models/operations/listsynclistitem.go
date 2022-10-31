package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncListItemServers = []string{
	"https://sync.twilio.com",
}

type ListSyncListItemPathParams struct {
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncListItemQueryParams struct {
	Bounds   *shared.SyncListItemEnumQueryFromBoundTypeEnum `queryParam:"style=form,explode=true,name=Bounds"`
	From     *string                                        `queryParam:"style=form,explode=true,name=From"`
	Order    *shared.SyncListItemEnumQueryResultOrderEnum   `queryParam:"style=form,explode=true,name=Order"`
	PageSize *int64                                         `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncListItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncListItemRequest struct {
	ServerURL   *string
	PathParams  ListSyncListItemPathParams
	QueryParams ListSyncListItemQueryParams
	Security    ListSyncListItemSecurity
}

type ListSyncListItemListSyncListItemResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncListItemListSyncListItemResponse struct {
	Items []shared.SyncV1ServiceSyncListSyncListItem    `json:"items,omitempty"`
	Meta  *ListSyncListItemListSyncListItemResponseMeta `json:"meta,omitempty"`
}

type ListSyncListItemResponse struct {
	ContentType              string
	ListSyncListItemResponse *ListSyncListItemListSyncListItemResponse
	StatusCode               int64
}
