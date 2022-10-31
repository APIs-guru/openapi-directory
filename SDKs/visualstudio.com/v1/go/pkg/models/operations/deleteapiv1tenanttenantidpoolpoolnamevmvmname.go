package operations



type DeleteAPIV1TenantTenantIDPoolPoolNameVMVMNamePathParams struct {
    PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
    VMName string `pathParam:"style=simple,explode=false,name=vmName"`
    
}

type DeleteAPIV1TenantTenantIDPoolPoolNameVMVMNameRequest struct {
    PathParams DeleteAPIV1TenantTenantIDPoolPoolNameVMVMNamePathParams 
    
}

type DeleteAPIV1TenantTenantIDPoolPoolNameVMVMNameResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

