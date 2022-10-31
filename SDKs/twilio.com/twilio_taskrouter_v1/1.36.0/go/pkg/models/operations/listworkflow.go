package operations

import (
"openapi/pkg/models/shared")
var ListWorkflowServers = []string{
	"https://taskrouter.twilio.com",
}

type ListWorkflowPathParams struct {
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type ListWorkflowQueryParams struct {
    FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListWorkflowSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListWorkflowRequest struct {
    ServerURL *string 
    PathParams ListWorkflowPathParams 
    QueryParams ListWorkflowQueryParams 
    Security ListWorkflowSecurity 
    
}

type ListWorkflowListWorkflowResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListWorkflowListWorkflowResponse struct {
    Meta *ListWorkflowListWorkflowResponseMeta `json:"meta,omitempty"`
    Workflows []shared.TaskrouterV1WorkspaceWorkflow `json:"workflows,omitempty"`
    
}

type ListWorkflowResponse struct {
    ContentType string 
    ListWorkflowResponse *ListWorkflowListWorkflowResponse 
    StatusCode int64 
    
}

