package operations

import (
"openapi/pkg/models/shared")

type GroupsDeletePathParams struct {
    ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    
}

type GroupsDeleteQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type GroupsDeleteRequest struct {
    PathParams GroupsDeletePathParams 
    QueryParams GroupsDeleteQueryParams 
    
}

type GroupsDeleteResponse struct {
    ContentType string 
    GraphError *shared.GraphError 
    StatusCode int64 
    
}

