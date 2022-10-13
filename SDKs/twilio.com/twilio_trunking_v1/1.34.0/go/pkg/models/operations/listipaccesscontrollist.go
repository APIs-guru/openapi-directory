package operations

import (
	"openapi/pkg/models/shared"
)

var ListIPAccessControlListServers = []string{
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

type ListIPAccessControlListRequest struct {
	ServerURL   *string
	PathParams  ListIPAccessControlListPathParams
	QueryParams ListIPAccessControlListQueryParams
	Security    ListIPAccessControlListSecurity
}

type ListIPAccessControlList200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListIPAccessControlList200ApplicationJSONListIPAccessControlListResponse struct {
	IPAccessControlLists []shared.TrunkingV1TrunkIPAccessControlList    `json:"ip_access_control_lists"`
	Meta                 *ListIPAccessControlList200ApplicationJSONMeta `json:"meta"`
}

type ListIPAccessControlListResponse struct {
	ContentType                     string
	ListIPAccessControlListResponse *ListIPAccessControlList200ApplicationJSONListIPAccessControlListResponse
	StatusCode                      int64
}
