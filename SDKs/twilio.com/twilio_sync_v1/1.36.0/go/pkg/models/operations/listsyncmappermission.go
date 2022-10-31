package operations

import (
"openapi/pkg/models/shared")
var ListSyncMapPermissionServers = []string{
	"https://sync.twilio.com",
}

type ListSyncMapPermissionPathParams struct {
    MapSid string `pathParam:"style=simple,explode=false,name=MapSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type ListSyncMapPermissionQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListSyncMapPermissionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListSyncMapPermissionRequest struct {
    ServerURL *string 
    PathParams ListSyncMapPermissionPathParams 
    QueryParams ListSyncMapPermissionQueryParams 
    Security ListSyncMapPermissionSecurity 
    
}

type ListSyncMapPermissionListSyncMapPermissionResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListSyncMapPermissionListSyncMapPermissionResponse struct {
    Meta *ListSyncMapPermissionListSyncMapPermissionResponseMeta `json:"meta,omitempty"`
    Permissions []shared.SyncV1ServiceSyncMapSyncMapPermission `json:"permissions,omitempty"`
    
}

type ListSyncMapPermissionResponse struct {
    ContentType string 
    ListSyncMapPermissionResponse *ListSyncMapPermissionListSyncMapPermissionResponse 
    StatusCode int64 
    
}

