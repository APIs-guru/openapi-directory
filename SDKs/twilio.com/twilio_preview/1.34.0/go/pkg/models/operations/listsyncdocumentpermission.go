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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncDocumentPermission200ApplicationJSONListSyncDocumentPermissionResponse struct {
	Meta        *ListSyncDocumentPermission200ApplicationJSONMeta     `json:"meta"`
	Permissions []shared.PreviewSyncServiceDocumentDocumentPermission `json:"permissions"`
}

type ListSyncDocumentPermissionResponse struct {
	ContentType                        string
	ListSyncDocumentPermissionResponse *ListSyncDocumentPermission200ApplicationJSONListSyncDocumentPermissionResponse
	StatusCode                         int64
}
