package operations

import (
	"openapi/pkg/models/shared"
)

type PostTransformDefinitionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostTransformDefinitionRequest struct {
	Headers PostTransformDefinitionHeaders
	Request shared.TransformDefinition `request:"mediaType=application/json"`
}

type PostTransformDefinitionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
