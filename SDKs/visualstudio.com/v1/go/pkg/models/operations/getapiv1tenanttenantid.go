package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1TenantTenantIDPathParams struct {
    TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
    
}

type GetAPIV1TenantTenantIDRequest struct {
    PathParams GetAPIV1TenantTenantIDPathParams 
    
}

type GetAPIV1TenantTenantIDResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    TenantInfoResult *shared.TenantInfoResult 
    
}

