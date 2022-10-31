package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIV1PrebuildsPoolsPoolIDInstancesPathParams struct {
	PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
}

type PostAPIV1PrebuildsPoolsPoolIDInstancesRequests struct {
	CreateEnvironmentPoolResourceBody  *shared.CreateEnvironmentPoolResourceBody `request:"mediaType=application/*+json"`
	CreateEnvironmentPoolResourceBody1 *shared.CreateEnvironmentPoolResourceBody `request:"mediaType=application/json"`
	CreateEnvironmentPoolResourceBody2 *shared.CreateEnvironmentPoolResourceBody `request:"mediaType=application/json-patch+json"`
	CreateEnvironmentPoolResourceBody3 *shared.CreateEnvironmentPoolResourceBody `request:"mediaType=text/json"`
}

type PostAPIV1PrebuildsPoolsPoolIDInstancesRequest struct {
	PathParams PostAPIV1PrebuildsPoolsPoolIDInstancesPathParams
	Request    *PostAPIV1PrebuildsPoolsPoolIDInstancesRequests
}

type PostAPIV1PrebuildsPoolsPoolIDInstancesResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
