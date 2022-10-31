package operations

import (
"openapi/pkg/models/shared")
var ListWorkerChannelServers = []string{
	"https://taskrouter.twilio.com",
}

type ListWorkerChannelPathParams struct {
    WorkerSid string `pathParam:"style=simple,explode=false,name=WorkerSid"`
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type ListWorkerChannelQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListWorkerChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListWorkerChannelRequest struct {
    ServerURL *string 
    PathParams ListWorkerChannelPathParams 
    QueryParams ListWorkerChannelQueryParams 
    Security ListWorkerChannelSecurity 
    
}

type ListWorkerChannelListWorkerChannelResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListWorkerChannelListWorkerChannelResponse struct {
    Channels []shared.TaskrouterV1WorkspaceWorkerWorkerChannel `json:"channels,omitempty"`
    Meta *ListWorkerChannelListWorkerChannelResponseMeta `json:"meta,omitempty"`
    
}

type ListWorkerChannelResponse struct {
    ContentType string 
    ListWorkerChannelResponse *ListWorkerChannelListWorkerChannelResponse 
    StatusCode int64 
    
}

