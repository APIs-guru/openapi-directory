package operations

type PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStopPathParams struct {
	PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
	VMName   string `pathParam:"style=simple,explode=false,name=vmName"`
}

type PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStopRequest struct {
	PathParams PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStopPathParams
}

type PostAPIV1TenantTenantIDPoolPoolNameVMVMNameStopResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
