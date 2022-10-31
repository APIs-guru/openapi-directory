package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1TenantTenantIDPoolPoolNameVMVMNamePathParams struct {
    PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
    VMName string `pathParam:"style=simple,explode=false,name=vmName"`
    
}

type GetAPIV1TenantTenantIDPoolPoolNameVMVMNameRequest struct {
    PathParams GetAPIV1TenantTenantIDPoolPoolNameVMVMNamePathParams 
    
}

type GetAPIV1TenantTenantIDPoolPoolNameVMVMNameResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    VMResult *shared.VMResult 
    
}

