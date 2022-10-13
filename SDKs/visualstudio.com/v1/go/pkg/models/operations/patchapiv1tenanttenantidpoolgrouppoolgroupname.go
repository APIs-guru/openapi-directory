package operations

import (
	"openapi/pkg/models/shared"
)

type PatchAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams struct {
	PoolGroupName string `pathParam:"style=simple,explode=false,name=poolGroupName"`
	TenantID      string `pathParam:"style=simple,explode=false,name=tenantId"`
}

type PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameRequests struct {
	UpdatePoolGroupBody  *shared.UpdatePoolGroupBody `request:"mediaType=application/*+json"`
	UpdatePoolGroupBody1 *shared.UpdatePoolGroupBody `request:"mediaType=application/json"`
	UpdatePoolGroupBody2 *shared.UpdatePoolGroupBody `request:"mediaType=application/json-patch+json"`
	UpdatePoolGroupBody3 *shared.UpdatePoolGroupBody `request:"mediaType=text/json"`
}

type PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameRequest struct {
	PathParams PatchAPIV1TenantTenantIDPoolGroupPoolGroupNamePathParams
	Request    *PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameRequests
}

type PatchAPIV1TenantTenantIDPoolGroupPoolGroupNameResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
