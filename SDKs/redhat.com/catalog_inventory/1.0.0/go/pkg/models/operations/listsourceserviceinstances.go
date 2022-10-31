package operations

import (
"openapi/pkg/models/shared")

type ListSourceServiceInstancesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ListSourceServiceInstancesQueryParams struct {
    Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
    
}

type ListSourceServiceInstancesRequest struct {
    PathParams ListSourceServiceInstancesPathParams 
    QueryParams ListSourceServiceInstancesQueryParams 
    
}

type ListSourceServiceInstancesResponse struct {
    ContentType string 
    ErrorNotFound *shared.ErrorNotFound 
    ServiceInstancesCollection *shared.ServiceInstancesCollection 
    StatusCode int64 
    
}

