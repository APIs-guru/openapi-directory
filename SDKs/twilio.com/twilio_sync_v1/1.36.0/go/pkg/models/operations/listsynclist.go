package operations

import (
"openapi/pkg/models/shared")
var ListSyncListServers = []string{
	"https://sync.twilio.com",
}

type ListSyncListPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type ListSyncListQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListSyncListSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListSyncListRequest struct {
    ServerURL *string 
    PathParams ListSyncListPathParams 
    QueryParams ListSyncListQueryParams 
    Security ListSyncListSecurity 
    
}

type ListSyncListListSyncListResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListSyncListListSyncListResponse struct {
    Lists []shared.SyncV1ServiceSyncList `json:"lists,omitempty"`
    Meta *ListSyncListListSyncListResponseMeta `json:"meta,omitempty"`
    
}

type ListSyncListResponse struct {
    ContentType string 
    ListSyncListResponse *ListSyncListListSyncListResponse 
    StatusCode int64 
    
}

