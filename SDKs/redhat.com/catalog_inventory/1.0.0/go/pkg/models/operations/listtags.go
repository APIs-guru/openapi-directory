package operations

import (
"openapi/pkg/models/shared")

type ListTagsQueryParams struct {
    Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
    
}

type ListTagsRequest struct {
    QueryParams ListTagsQueryParams 
    
}

type ListTagsResponse struct {
    ContentType string 
    StatusCode int64 
    TagsCollection *shared.TagsCollection 
    
}

