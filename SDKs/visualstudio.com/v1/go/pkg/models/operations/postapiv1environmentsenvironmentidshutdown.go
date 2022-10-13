package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIV1EnvironmentsEnvironmentIDShutdownPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type PostAPIV1EnvironmentsEnvironmentIDShutdownRequest struct {
	PathParams PostAPIV1EnvironmentsEnvironmentIDShutdownPathParams
}

type PostAPIV1EnvironmentsEnvironmentIDShutdownResponse struct {
	Body                   []byte
	CloudEnvironmentResult *shared.CloudEnvironmentResult
	ContentType            string
	MessageCodes           *int32
	ProblemDetails         map[string]interface{}
	StatusCode             int64
}
