package operations

import (
"openapi/pkg/models/shared")

type ListTasksQueryParams struct {
    Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
    
}

type ListTasksRequest struct {
    QueryParams ListTasksQueryParams 
    
}

type ListTasksResponse struct {
    ContentType string 
    StatusCode int64 
    TasksCollection *shared.TasksCollection 
    
}

