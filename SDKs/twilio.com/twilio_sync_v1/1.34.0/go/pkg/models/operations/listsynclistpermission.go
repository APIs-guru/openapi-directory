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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncListPermission200ApplicationJSONListSyncListPermissionResponse struct {
	Meta        *ListSyncListPermission200ApplicationJSONMeta    `json:"meta"`
	Permissions []shared.SyncV1ServiceSyncListSyncListPermission `json:"permissions"`
}

type ListSyncListPermissionResponse struct {
	ContentType                    string
	ListSyncListPermissionResponse *ListSyncListPermission200ApplicationJSONListSyncListPermissionResponse
	StatusCode                     int64
}
