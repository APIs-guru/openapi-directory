package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncSyncMapPermissionServers = []string{
	"https://preview.twilio.com",
}

type ListSyncSyncMapPermissionPathParams struct {
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncSyncMapPermissionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncSyncMapPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncSyncMapPermissionRequest struct {
	ServerURL   *string
	PathParams  ListSyncSyncMapPermissionPathParams
	QueryParams ListSyncSyncMapPermissionQueryParams
	Security    ListSyncSyncMapPermissionSecurity
}

type ListSyncSyncMapPermission200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncSyncMapPermission200ApplicationJSONListSyncSyncMapPermissionResponse struct {
	Meta        *ListSyncSyncMapPermission200ApplicationJSONMeta    `json:"meta"`
	Permissions []shared.PreviewSyncServiceSyncMapSyncMapPermission `json:"permissions"`
}

type ListSyncSyncMapPermissionResponse struct {
	ContentType                       string
	ListSyncSyncMapPermissionResponse *ListSyncSyncMapPermission200ApplicationJSONListSyncSyncMapPermissionResponse
	StatusCode                        int64
}
