package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1TenantTenantIDPoolPoolNameVMPathParams struct {
	PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
}

type GetAPIV1TenantTenantIDPoolPoolNameVMRequest struct {
	PathParams GetAPIV1TenantTenantIDPoolPoolNameVMPathParams
}

type GetAPIV1TenantTenantIDPoolPoolNameVMResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
	VMResults      []shared.VMResult
}
