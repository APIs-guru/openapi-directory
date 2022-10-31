package operations



type TaskListSubtasksPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
    
}

type TaskListSubtasksQueryParams struct {
    DollarSelect *string `queryParam:"style=form,explode=true,name=$select"`
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type TaskListSubtasksHeaders struct {
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type TaskListSubtasksRequest struct {
    PathParams TaskListSubtasksPathParams 
    QueryParams TaskListSubtasksQueryParams 
    Headers TaskListSubtasksHeaders 
    
}

type TaskListSubtasksResponse struct {
    BatchError *interface{} 
    CloudTaskListSubtasksResult *interface{} 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

