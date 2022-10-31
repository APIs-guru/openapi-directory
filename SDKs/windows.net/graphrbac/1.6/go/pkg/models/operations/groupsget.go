package operations

import (
"openapi/pkg/models/shared")

type GroupsGetPathParams struct {
    ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    
}

type GroupsGetQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type GroupsGetRequest struct {
    PathParams GroupsGetPathParams 
    QueryParams GroupsGetQueryParams 
    
}

type GroupsGetResponse struct {
    AdGroup map[string]map[string]interface{} 
    ContentType string 
    GraphError *shared.GraphError 
    StatusCode int64 
    
}

