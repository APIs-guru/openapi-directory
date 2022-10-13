package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncMapPermissionServers = []string{
	"https://sync.twilio.com",
}

type ListSyncMapPermissionPathParams struct {
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncMapPermissionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncMapPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncMapPermissionRequest struct {
	ServerURL   *string
	PathParams  ListSyncMapPermissionPathParams
	QueryParams ListSyncMapPermissionQueryParams
	Security    ListSyncMapPermissionSecurity
}

type ListSyncMapPermission200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncMapPermission200ApplicationJSONListSyncMapPermissionResponse struct {
	Meta        *ListSyncMapPermission200ApplicationJSONMeta   `json:"meta"`
	Permissions []shared.SyncV1ServiceSyncMapSyncMapPermission `json:"permissions"`
}

type ListSyncMapPermissionResponse struct {
	ContentType                   string
	ListSyncMapPermissionResponse *ListSyncMapPermission200ApplicationJSONListSyncMapPermissionResponse
	StatusCode                    int64
}
