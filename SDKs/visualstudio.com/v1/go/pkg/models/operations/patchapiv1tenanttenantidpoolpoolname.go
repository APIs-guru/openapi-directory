package operations

import (
"openapi/pkg/models/shared")

type PatchAPIV1TenantTenantIDPoolPoolNamePathParams struct {
    PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
    
}

type PatchAPIV1TenantTenantIDPoolPoolNameRequests struct {
    CreateOrUpdatePoolBody *shared.CreateOrUpdatePoolBody `request:"mediaType=application/*+json"`
    CreateOrUpdatePoolBody1 *shared.CreateOrUpdatePoolBody `request:"mediaType=application/json"`
    CreateOrUpdatePoolBody2 *shared.CreateOrUpdatePoolBody `request:"mediaType=application/json-patch+json"`
    CreateOrUpdatePoolBody3 *shared.CreateOrUpdatePoolBody `request:"mediaType=text/json"`
    
}

type PatchAPIV1TenantTenantIDPoolPoolNameRequest struct {
    PathParams PatchAPIV1TenantTenantIDPoolPoolNamePathParams 
    Request *PatchAPIV1TenantTenantIDPoolPoolNameRequests 
    
}

type PatchAPIV1TenantTenantIDPoolPoolNameResponse struct {
    Body []byte 
    ContentType string 
    PoolResult *shared.PoolResult 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

