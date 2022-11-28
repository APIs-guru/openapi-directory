package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncSyncListServerList = []string{
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

type ListSyncSyncListListSyncSyncListResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncSyncListListSyncSyncListResponse struct {
	Lists []shared.PreviewSyncServiceSyncList           `json:"lists,omitempty"`
	Meta  *ListSyncSyncListListSyncSyncListResponseMeta `json:"meta,omitempty"`
}

type ListSyncSyncListRequest struct {
	ServerURL   *string
	PathParams  ListSyncSyncListPathParams
	QueryParams ListSyncSyncListQueryParams
	Security    ListSyncSyncListSecurity
}

type ListSyncSyncListResponse struct {
	ContentType              string
	ListSyncSyncListResponse *ListSyncSyncListListSyncSyncListResponse
	StatusCode               int64
}
