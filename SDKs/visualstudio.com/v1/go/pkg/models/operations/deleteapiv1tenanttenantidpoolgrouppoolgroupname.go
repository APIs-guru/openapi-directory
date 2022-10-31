package operations



type DeleteAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams struct {
    PoolGroupName string `pathParam:"style=simple,explode=false,name=poolGroupName"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
    
}

type DeleteAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest struct {
    PathParams DeleteAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams 
    
}

type DeleteAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

