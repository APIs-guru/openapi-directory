package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams struct {
    PoolGroupName string `pathParam:"style=simple,explode=false,name=poolGroupName"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
    
}

type GetAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest struct {
    PathParams GetAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams 
    
}

type GetAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse struct {
    Body []byte 
    ContentType string 
    PoolGroupResult *shared.PoolGroupResult 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

