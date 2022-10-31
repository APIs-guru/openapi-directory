package operations



type OAuth2PermissionGrantCreatePathParams struct {
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    
}

type OAuth2PermissionGrantCreateQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type OAuth2PermissionGrantCreateRequest struct {
    PathParams OAuth2PermissionGrantCreatePathParams 
    QueryParams OAuth2PermissionGrantCreateQueryParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type OAuth2PermissionGrantCreateResponse struct {
    ContentType string 
    OAuth2PermissionGrant *interface{} 
    StatusCode int64 
    
}

