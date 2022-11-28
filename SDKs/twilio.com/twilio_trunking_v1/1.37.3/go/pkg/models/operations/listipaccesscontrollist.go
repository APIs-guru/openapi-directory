package operations

import (
	"openapi/pkg/models/shared"
)

var ListIPAccessControlListServerList = []string{
	"https://trunking.twilio.com",
}

type ListIPAccessControlListPathParams struct {
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type ListIPAccessControlListQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListIPAccessControlListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListIPAccessControlListListIPAccessControlListResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListIPAccessControlListListIPAccessControlListResponse struct {
	IPAccessControlLists []shared.TrunkingV1TrunkIPAccessControlList                 `json:"ip_access_control_lists,omitempty"`
	Meta                 *ListIPAccessControlListListIPAccessControlListResponseMeta `json:"meta,omitempty"`
}

type ListIPAccessControlListRequest struct {
	ServerURL   *string
	PathParams  ListIPAccessControlListPathParams
	QueryParams ListIPAccessControlListQueryParams
	Security    ListIPAccessControlListSecurity
}

type ListIPAccessControlListResponse struct {
	ContentType                     string
	ListIPAccessControlListResponse *ListIPAccessControlListListIPAccessControlListResponse
	StatusCode                      int64
}
