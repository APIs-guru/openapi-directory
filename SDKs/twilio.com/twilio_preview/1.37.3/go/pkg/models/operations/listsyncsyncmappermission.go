package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncSyncMapPermissionServerList = []string{
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

type ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse struct {
	Meta        *ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta `json:"meta,omitempty"`
	Permissions []shared.PreviewSyncServiceSyncMapSyncMapPermission             `json:"permissions,omitempty"`
}

type ListSyncSyncMapPermissionRequest struct {
	ServerURL   *string
	PathParams  ListSyncSyncMapPermissionPathParams
	QueryParams ListSyncSyncMapPermissionQueryParams
	Security    ListSyncSyncMapPermissionSecurity
}

type ListSyncSyncMapPermissionResponse struct {
	ContentType                       string
	ListSyncSyncMapPermissionResponse *ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse
	StatusCode                        int64
}
