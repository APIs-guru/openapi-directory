package operations

import (
"openapi/pkg/models/shared")
var ListTaskQueueServers = []string{
	"https://taskrouter.twilio.com",
}

type ListTaskQueuePathParams struct {
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type ListTaskQueueQueryParams struct {
    EvaluateWorkerAttributes *string `queryParam:"style=form,explode=true,name=EvaluateWorkerAttributes"`
    FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    WorkerSid *string `queryParam:"style=form,explode=true,name=WorkerSid"`
    
}

type ListTaskQueueSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListTaskQueueRequest struct {
    ServerURL *string 
    PathParams ListTaskQueuePathParams 
    QueryParams ListTaskQueueQueryParams 
    Security ListTaskQueueSecurity 
    
}

type ListTaskQueueListTaskQueueResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListTaskQueueListTaskQueueResponse struct {
    Meta *ListTaskQueueListTaskQueueResponseMeta `json:"meta,omitempty"`
    TaskQueues []shared.TaskrouterV1WorkspaceTaskQueue `json:"task_queues,omitempty"`
    
}

type ListTaskQueueResponse struct {
    ContentType string 
    ListTaskQueueResponse *ListTaskQueueListTaskQueueResponse 
    StatusCode int64 
    
}

