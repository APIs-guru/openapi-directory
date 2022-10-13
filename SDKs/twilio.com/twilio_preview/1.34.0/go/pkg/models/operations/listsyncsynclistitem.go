package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncSyncListItemServers = []string{
	"https://preview.twilio.com",
}

type ListSyncSyncListItemPathParams struct {
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncSyncListItemQueryParams struct {
	Bounds   *shared.SyncListItemEnumQueryFromBoundTypeEnum `queryParam:"style=form,explode=true,name=Bounds"`
	From     *string                                        `queryParam:"style=form,explode=true,name=From"`
	Order    *shared.SyncListItemEnumQueryResultOrderEnum   `queryParam:"style=form,explode=true,name=Order"`
	PageSize *int64                                         `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncSyncListItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncSyncListItemRequest struct {
	ServerURL   *string
	PathParams  ListSyncSyncListItemPathParams
	QueryParams ListSyncSyncListItemQueryParams
	Security    ListSyncSyncListItemSecurity
}

type ListSyncSyncListItem200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncSyncListItem200ApplicationJSONListSyncSyncListItemResponse struct {
	Items []shared.PreviewSyncServiceSyncListSyncListItem `json:"items"`
	Meta  *ListSyncSyncListItem200ApplicationJSONMeta     `json:"meta"`
}

type ListSyncSyncListItemResponse struct {
	ContentType                  string
	ListSyncSyncListItemResponse *ListSyncSyncListItem200ApplicationJSONListSyncSyncListItemResponse
	StatusCode                   int64
}
