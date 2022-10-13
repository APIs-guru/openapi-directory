package operations

import (
	"openapi/pkg/models/shared"
)

var ListDocumentPermissionServers = []string{
	"https://sync.twilio.com",
}

type ListDocumentPermissionPathParams struct {
	DocumentSid string `pathParam:"style=simple,explode=false,name=DocumentSid"`
	ServiceSid  string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListDocumentPermissionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDocumentPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDocumentPermissionRequest struct {
	ServerURL   *string
	PathParams  ListDocumentPermissionPathParams
	QueryParams ListDocumentPermissionQueryParams
	Security    ListDocumentPermissionSecurity
}

type ListDocumentPermission200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListDocumentPermission200ApplicationJSONListDocumentPermissionResponse struct {
	Meta        *ListDocumentPermission200ApplicationJSONMeta    `json:"meta"`
	Permissions []shared.SyncV1ServiceDocumentDocumentPermission `json:"permissions"`
}

type ListDocumentPermissionResponse struct {
	ContentType                    string
	ListDocumentPermissionResponse *ListDocumentPermission200ApplicationJSONListDocumentPermissionResponse
	StatusCode                     int64
}
