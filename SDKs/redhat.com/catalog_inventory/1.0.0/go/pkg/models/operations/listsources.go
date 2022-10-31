package operations

import (
"openapi/pkg/models/shared")

type ListSourcesQueryParams struct {
    Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
    
}

type ListSourcesRequest struct {
    QueryParams ListSourcesQueryParams 
    
}

type ListSourcesResponse struct {
    ContentType string 
    SourcesCollection *shared.SourcesCollection 
    StatusCode int64 
    
}

