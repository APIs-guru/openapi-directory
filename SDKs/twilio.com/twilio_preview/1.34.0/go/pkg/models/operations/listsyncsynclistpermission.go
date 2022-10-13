package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncSyncListPermissionServers = []string{
	"https://preview.twilio.com",
}

type ListSyncSyncListPermissionPathParams struct {
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncSyncListPermissionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncSyncListPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncSyncListPermissionRequest struct {
	ServerURL   *string
	PathParams  ListSyncSyncListPermissionPathParams
	QueryParams ListSyncSyncListPermissionQueryParams
	Security    ListSyncSyncListPermissionSecurity
}

type ListSyncSyncListPermission200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncSyncListPermission200ApplicationJSONListSyncSyncListPermissionResponse struct {
	Meta        *ListSyncSyncListPermission200ApplicationJSONMeta     `json:"meta"`
	Permissions []shared.PreviewSyncServiceSyncListSyncListPermission `json:"permissions"`
}

type ListSyncSyncListPermissionResponse struct {
	ContentType                        string
	ListSyncSyncListPermissionResponse *ListSyncSyncListPermission200ApplicationJSONListSyncSyncListPermissionResponse
	StatusCode                         int64
}
