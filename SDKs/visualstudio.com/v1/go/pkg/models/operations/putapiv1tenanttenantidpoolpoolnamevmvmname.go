package operations

import (
	"openapi/pkg/models/shared"
)

type PutAPIV1TenantTenantIDPoolPoolNameVMVMNamePathParams struct {
	PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
	VMName   string `pathParam:"style=simple,explode=false,name=vmName"`
}

type PutAPIV1TenantTenantIDPoolPoolNameVMVMNameRequests struct {
	ClaimVMBody  *shared.ClaimVMBody `request:"mediaType=application/*+json"`
	ClaimVMBody1 *shared.ClaimVMBody `request:"mediaType=application/json"`
	ClaimVMBody2 *shared.ClaimVMBody `request:"mediaType=application/json-patch+json"`
	ClaimVMBody3 *shared.ClaimVMBody `request:"mediaType=text/json"`
}

type PutAPIV1TenantTenantIDPoolPoolNameVMVMNameRequest struct {
	PathParams PutAPIV1TenantTenantIDPoolPoolNameVMVMNamePathParams
	Request    *PutAPIV1TenantTenantIDPoolPoolNameVMVMNameRequests
}

type PutAPIV1TenantTenantIDPoolPoolNameVMVMNameResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
	VMResult       *shared.VMResult
}
