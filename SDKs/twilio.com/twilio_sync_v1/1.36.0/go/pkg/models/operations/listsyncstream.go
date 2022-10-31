package operations

import (
"openapi/pkg/models/shared")
var ListSyncStreamServers = []string{
	"https://sync.twilio.com",
}

type ListSyncStreamPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type ListSyncStreamQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListSyncStreamSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListSyncStreamRequest struct {
    ServerURL *string 
    PathParams ListSyncStreamPathParams 
    QueryParams ListSyncStreamQueryParams 
    Security ListSyncStreamSecurity 
    
}

type ListSyncStreamListSyncStreamResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListSyncStreamListSyncStreamResponse struct {
    Meta *ListSyncStreamListSyncStreamResponseMeta `json:"meta,omitempty"`
    Streams []shared.SyncV1ServiceSyncStream `json:"streams,omitempty"`
    
}

type ListSyncStreamResponse struct {
    ContentType string 
    ListSyncStreamResponse *ListSyncStreamListSyncStreamResponse 
    StatusCode int64 
    
}

