package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIV1EnvironmentsEnvironmentIDStartPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type PostAPIV1EnvironmentsEnvironmentIDStartQueryParams struct {
	Access *bool `queryParam:"style=form,explode=true,name=access"`
}

type PostAPIV1EnvironmentsEnvironmentIDStartRequest struct {
	PathParams  PostAPIV1EnvironmentsEnvironmentIDStartPathParams
	QueryParams PostAPIV1EnvironmentsEnvironmentIDStartQueryParams
}

type PostAPIV1EnvironmentsEnvironmentIDStartResponse struct {
	Body                   []byte
	CloudEnvironmentResult *shared.CloudEnvironmentResult
	ContentType            string
	MessageCodes           *int32
	ProblemDetails         map[string]interface{}
	StatusCode             int64
}
