package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncSyncListPermissionServerList = []string{
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

type ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncSyncListPermissionListSyncSyncListPermissionResponse struct {
	Meta        *ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta `json:"meta,omitempty"`
	Permissions []shared.PreviewSyncServiceSyncListSyncListPermission             `json:"permissions,omitempty"`
}

type ListSyncSyncListPermissionRequest struct {
	ServerURL   *string
	PathParams  ListSyncSyncListPermissionPathParams
	QueryParams ListSyncSyncListPermissionQueryParams
	Security    ListSyncSyncListPermissionSecurity
}

type ListSyncSyncListPermissionResponse struct {
	ContentType                        string
	ListSyncSyncListPermissionResponse *ListSyncSyncListPermissionListSyncSyncListPermissionResponse
	StatusCode                         int64
}
