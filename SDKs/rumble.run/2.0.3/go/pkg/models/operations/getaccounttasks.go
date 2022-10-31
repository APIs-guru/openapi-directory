package operations

import (
"openapi/pkg/models/shared")

type GetAccountTasksQueryParams struct {
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type GetAccountTasksSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAccountTasksRequest struct {
    QueryParams GetAccountTasksQueryParams 
    Security GetAccountTasksSecurity 
    
}

type GetAccountTasksResponse struct {
    ContentType string 
    StatusCode int64 
    Tasks []shared.Task 
    
}

