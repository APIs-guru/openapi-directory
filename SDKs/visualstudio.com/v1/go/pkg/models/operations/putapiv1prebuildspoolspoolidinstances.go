package operations

import (
	"openapi/pkg/models/shared"
)

type PutAPIV1PrebuildsPoolsPoolIDInstancesPathParams struct {
	PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
}

type PutAPIV1PrebuildsPoolsPoolIDInstancesRequests struct {
	CreateEnvironmentPoolResourceBody  *shared.CreateEnvironmentPoolResourceBody `request:"mediaType=application/*+json"`
	CreateEnvironmentPoolResourceBody1 *shared.CreateEnvironmentPoolResourceBody `request:"mediaType=application/json"`
	CreateEnvironmentPoolResourceBody2 *shared.CreateEnvironmentPoolResourceBody `request:"mediaType=application/json-patch+json"`
	CreateEnvironmentPoolResourceBody3 *shared.CreateEnvironmentPoolResourceBody `request:"mediaType=text/json"`
}

type PutAPIV1PrebuildsPoolsPoolIDInstancesRequest struct {
	PathParams PutAPIV1PrebuildsPoolsPoolIDInstancesPathParams
	Request    *PutAPIV1PrebuildsPoolsPoolIDInstancesRequests
}

type PutAPIV1PrebuildsPoolsPoolIDInstancesResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
