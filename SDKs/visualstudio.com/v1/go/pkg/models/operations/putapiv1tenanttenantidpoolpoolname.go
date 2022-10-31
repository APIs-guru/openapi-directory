package operations

import (
	"openapi/pkg/models/shared"
)

type PutAPIV1TenantTenantIDPoolPoolNamePathParams struct {
	PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
}

type PutAPIV1TenantTenantIDPoolPoolNameRequests struct {
	CreateOrUpdatePoolBody  *shared.CreateOrUpdatePoolBody `request:"mediaType=application/*+json"`
	CreateOrUpdatePoolBody1 *shared.CreateOrUpdatePoolBody `request:"mediaType=application/json"`
	CreateOrUpdatePoolBody2 *shared.CreateOrUpdatePoolBody `request:"mediaType=application/json-patch+json"`
	CreateOrUpdatePoolBody3 *shared.CreateOrUpdatePoolBody `request:"mediaType=text/json"`
}

type PutAPIV1TenantTenantIDPoolPoolNameRequest struct {
	PathParams PutAPIV1TenantTenantIDPoolPoolNamePathParams
	Request    *PutAPIV1TenantTenantIDPoolPoolNameRequests
}

type PutAPIV1TenantTenantIDPoolPoolNameResponse struct {
	Body           []byte
	ContentType    string
	PoolResult     *shared.PoolResult
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
