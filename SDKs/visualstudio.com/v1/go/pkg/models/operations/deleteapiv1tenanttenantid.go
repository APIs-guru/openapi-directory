package operations



type DeleteAPIV1TenantTenantIDPathParams struct {
    TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
    
}

type DeleteAPIV1TenantTenantIDRequest struct {
    PathParams DeleteAPIV1TenantTenantIDPathParams 
    
}

type DeleteAPIV1TenantTenantIDResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

