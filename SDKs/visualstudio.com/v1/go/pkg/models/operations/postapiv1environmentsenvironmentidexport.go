package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIV1EnvironmentsEnvironmentIDExportPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type PostAPIV1EnvironmentsEnvironmentIDExportRequest struct {
	PathParams PostAPIV1EnvironmentsEnvironmentIDExportPathParams
}

type PostAPIV1EnvironmentsEnvironmentIDExportResponse struct {
	Body                   []byte
	CloudEnvironmentResult *shared.CloudEnvironmentResult
	ContentType            string
	MessageCodes           *int32
	ProblemDetails         map[string]interface{}
	StatusCode             int64
}
