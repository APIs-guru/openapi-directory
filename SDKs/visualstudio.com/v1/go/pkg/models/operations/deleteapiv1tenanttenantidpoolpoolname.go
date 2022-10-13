package operations

type DeleteAPIV1TenantTenantIDPoolPoolNamePathParams struct {
	PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
}

type DeleteAPIV1TenantTenantIDPoolPoolNameRequest struct {
	PathParams DeleteAPIV1TenantTenantIDPoolPoolNamePathParams
}

type DeleteAPIV1TenantTenantIDPoolPoolNameResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
