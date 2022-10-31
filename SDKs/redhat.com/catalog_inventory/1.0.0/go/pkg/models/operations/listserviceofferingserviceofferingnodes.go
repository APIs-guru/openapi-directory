package operations

import (
"openapi/pkg/models/shared")

type ListServiceOfferingServiceOfferingNodesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ListServiceOfferingServiceOfferingNodesQueryParams struct {
    Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
    
}

type ListServiceOfferingServiceOfferingNodesRequest struct {
    PathParams ListServiceOfferingServiceOfferingNodesPathParams 
    QueryParams ListServiceOfferingServiceOfferingNodesQueryParams 
    
}

type ListServiceOfferingServiceOfferingNodesResponse struct {
    ContentType string 
    ErrorNotFound *shared.ErrorNotFound 
    ServiceOfferingNodesCollection *shared.ServiceOfferingNodesCollection 
    StatusCode int64 
    
}

