package operations

import (
"openapi/pkg/models/shared")

type UsersGetPathParams struct {
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    UpnOrObjectID string `pathParam:"style=simple,explode=false,name=upnOrObjectId"`
    
}

type UsersGetQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type UsersGetRequest struct {
    PathParams UsersGetPathParams 
    QueryParams UsersGetQueryParams 
    
}

type UsersGetResponse struct {
    ContentType string 
    GraphError *shared.GraphError 
    StatusCode int64 
    User map[string]map[string]interface{} 
    
}

