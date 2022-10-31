package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1TenantTenantIDPoolPoolNamePathParams struct {
    PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
    
}

type GetAPIV1TenantTenantIDPoolPoolNameRequest struct {
    PathParams GetAPIV1TenantTenantIDPoolPoolNamePathParams 
    
}

type GetAPIV1TenantTenantIDPoolPoolNameResponse struct {
    Body []byte 
    ContentType string 
    PoolResult *shared.PoolResult 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

