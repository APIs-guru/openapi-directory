package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1EnvironmentsEnvironmentIDUpdatesPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type GetAPIV1EnvironmentsEnvironmentIDUpdatesRequest struct {
	PathParams GetAPIV1EnvironmentsEnvironmentIDUpdatesPathParams
}

type GetAPIV1EnvironmentsEnvironmentIDUpdatesResponse struct {
	Body                   []byte
	CloudEnvironmentResult *shared.CloudEnvironmentResult
	ContentType            string
	ProblemDetails         map[string]interface{}
	StatusCode             int64
}
