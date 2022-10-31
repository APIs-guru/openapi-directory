package operations

import (
"openapi/pkg/models/shared")

type ListServiceInstancesQueryParams struct {
    Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
    
}

type ListServiceInstancesRequest struct {
    QueryParams ListServiceInstancesQueryParams 
    
}

type ListServiceInstancesResponse struct {
    ContentType string 
    ServiceInstancesCollection *shared.ServiceInstancesCollection 
    StatusCode int64 
    
}

