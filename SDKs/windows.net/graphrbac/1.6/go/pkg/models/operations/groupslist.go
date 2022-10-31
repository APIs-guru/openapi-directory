package operations

import (
"openapi/pkg/models/shared")

type GroupsListPathParams struct {
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    
}

type GroupsListQueryParams struct {
    DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type GroupsListRequest struct {
    PathParams GroupsListPathParams 
    QueryParams GroupsListQueryParams 
    
}

type GroupsListResponse struct {
    ContentType string 
    GraphError *shared.GraphError 
    GroupListResult *shared.GroupListResult 
    StatusCode int64 
    
}

