package operations

import (
"openapi/pkg/models/shared")
var ListDocumentPermissionServers = []string{
	"https://sync.twilio.com",
}

type ListDocumentPermissionPathParams struct {
    DocumentSid string `pathParam:"style=simple,explode=false,name=DocumentSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type ListDocumentPermissionQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListDocumentPermissionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListDocumentPermissionRequest struct {
    ServerURL *string 
    PathParams ListDocumentPermissionPathParams 
    QueryParams ListDocumentPermissionQueryParams 
    Security ListDocumentPermissionSecurity 
    
}

type ListDocumentPermissionListDocumentPermissionResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListDocumentPermissionListDocumentPermissionResponse struct {
    Meta *ListDocumentPermissionListDocumentPermissionResponseMeta `json:"meta,omitempty"`
    Permissions []shared.SyncV1ServiceDocumentDocumentPermission `json:"permissions,omitempty"`
    
}

type ListDocumentPermissionResponse struct {
    ContentType string 
    ListDocumentPermissionResponse *ListDocumentPermissionListDocumentPermissionResponse 
    StatusCode int64 
    
}

