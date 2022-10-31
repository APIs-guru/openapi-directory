package operations

import (
"openapi/pkg/models/shared")
var ListTaskChannelServers = []string{
	"https://taskrouter.twilio.com",
}

type ListTaskChannelPathParams struct {
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type ListTaskChannelQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListTaskChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListTaskChannelRequest struct {
    ServerURL *string 
    PathParams ListTaskChannelPathParams 
    QueryParams ListTaskChannelQueryParams 
    Security ListTaskChannelSecurity 
    
}

type ListTaskChannelListTaskChannelResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListTaskChannelListTaskChannelResponse struct {
    Channels []shared.TaskrouterV1WorkspaceTaskChannel `json:"channels,omitempty"`
    Meta *ListTaskChannelListTaskChannelResponseMeta `json:"meta,omitempty"`
    
}

type ListTaskChannelResponse struct {
    ContentType string 
    ListTaskChannelResponse *ListTaskChannelListTaskChannelResponse 
    StatusCode int64 
    
}

