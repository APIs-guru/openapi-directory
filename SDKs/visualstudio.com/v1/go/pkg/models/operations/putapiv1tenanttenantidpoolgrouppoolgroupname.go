package operations

import (
	"openapi/pkg/models/shared"
)

type PutAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams struct {
	PoolGroupName string `pathParam:"style=simple,explode=false,name=poolGroupName"`
	TenantID      string `pathParam:"style=simple,explode=false,name=tenantId"`
}

type PutAPIV1TenantTenantIDPoolGroupPoolGroupNameRequests struct {
	CreatePoolGroupBody  *shared.CreatePoolGroupBody `request:"mediaType=application/*+json"`
	CreatePoolGroupBody1 *shared.CreatePoolGroupBody `request:"mediaType=application/json"`
	CreatePoolGroupBody2 *shared.CreatePoolGroupBody `request:"mediaType=application/json-patch+json"`
	CreatePoolGroupBody3 *shared.CreatePoolGroupBody `request:"mediaType=text/json"`
}

type PutAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest struct {
	PathParams PutAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams
	Request    *PutAPIV1TenantTenantIDPoolGroupPoolGroupNameRequests
}

type PutAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
