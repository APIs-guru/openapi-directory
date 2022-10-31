package operations

import (
"openapi/pkg/models/shared")

type GetTasksQueryParams struct {
    Search *string `queryParam:"style=form,explode=true,name=search"`
    Status *string `queryParam:"style=form,explode=true,name=status"`
    
}

type GetTasksSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetTasksRequest struct {
    QueryParams GetTasksQueryParams 
    Security GetTasksSecurity 
    
}

type GetTasksResponse struct {
    ContentType string 
    StatusCode int64 
    Tasks []shared.Task 
    
}

