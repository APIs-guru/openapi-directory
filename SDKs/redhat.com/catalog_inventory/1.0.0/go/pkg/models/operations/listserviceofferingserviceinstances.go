package operations

import (
"openapi/pkg/models/shared")

type ListServiceOfferingServiceInstancesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ListServiceOfferingServiceInstancesQueryParams struct {
    Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
    
}

type ListServiceOfferingServiceInstancesRequest struct {
    PathParams ListServiceOfferingServiceInstancesPathParams 
    QueryParams ListServiceOfferingServiceInstancesQueryParams 
    
}

type ListServiceOfferingServiceInstancesResponse struct {
    ContentType string 
    ErrorNotFound *shared.ErrorNotFound 
    ServiceInstancesCollection *shared.ServiceInstancesCollection 
    StatusCode int64 
    
}

