package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1GenevaActionsEnvironmentsEnvironmentIDPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type GetAPIV1GenevaActionsEnvironmentsEnvironmentIDRequest struct {
	PathParams GetAPIV1GenevaActionsEnvironmentsEnvironmentIDPathParams
}

type GetAPIV1GenevaActionsEnvironmentsEnvironmentIDResponse struct {
	Body                   []byte
	CloudEnvironmentResult *shared.CloudEnvironmentResult
	ContentType            string
	ProblemDetails         map[string]interface{}
	StatusCode             int64
}
