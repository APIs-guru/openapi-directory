package operations

type PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStartPathParams struct {
	PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
	VMName   string `pathParam:"style=simple,explode=false,name=vmName"`
}

type PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStartRequest struct {
	PathParams PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStartPathParams
}

type PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStartResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
