package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncDocumentPermissionServers = []string{
	"https://preview.twilio.com",
}

type ListSyncDocumentPermissionPathParams struct {
	DocumentSid string `pathParam:"style=simple,explode=false,name=DocumentSid"`
	ServiceSid  string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncDocumentPermissionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncDocumentPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncDocumentPermissionRequest struct {
	ServerURL   *string
	PathParams  ListSyncDocumentPermissionPathParams
	QueryParams ListSyncDocumentPermissionQueryParams
	Security    ListSyncDocumentPermissionSecurity
}

type ListSyncDocumentPermission200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncDocumentPermission200ApplicationJSONListSyncDocumentPermissionResponse struct {
	Meta        *ListSyncDocumentPermission200ApplicationJSONMeta     `json:"meta,omitempty"`
	Permissions []shared.PreviewSyncServiceDocumentDocumentPermission `json:"permissions,omitempty"`
}

type ListSyncDocumentPermissionResponse struct {
	ContentType                        string
	ListSyncDocumentPermissionResponse *ListSyncDocumentPermission200ApplicationJSONListSyncDocumentPermissionResponse
	StatusCode                         int64
}
