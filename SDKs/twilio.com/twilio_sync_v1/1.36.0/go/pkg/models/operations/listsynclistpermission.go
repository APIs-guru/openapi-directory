package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncListPermissionServers = []string{
	"https://sync.twilio.com",
}

type ListSyncListPermissionPathParams struct {
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncListPermissionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncListPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncListPermissionRequest struct {
	ServerURL   *string
	PathParams  ListSyncListPermissionPathParams
	QueryParams ListSyncListPermissionQueryParams
	Security    ListSyncListPermissionSecurity
}

type ListSyncListPermission200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncListPermission200ApplicationJSONListSyncListPermissionResponse struct {
	Meta        *ListSyncListPermission200ApplicationJSONMeta    `json:"meta,omitempty"`
	Permissions []shared.SyncV1ServiceSyncListSyncListPermission `json:"permissions,omitempty"`
}

type ListSyncListPermissionResponse struct {
	ContentType                    string
	ListSyncListPermissionResponse *ListSyncListPermission200ApplicationJSONListSyncListPermissionResponse
	StatusCode                     int64
}
