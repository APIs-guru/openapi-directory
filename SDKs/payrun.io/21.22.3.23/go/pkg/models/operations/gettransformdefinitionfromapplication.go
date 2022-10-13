package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransformDefinitionFromApplicationPathParams struct {
	TransformDefinitionID string `pathParam:"style=simple,explode=false,name=TransformDefinitionId"`
}

type GetTransformDefinitionFromApplicationHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTransformDefinitionFromApplicationRequest struct {
	PathParams GetTransformDefinitionFromApplicationPathParams
	Headers    GetTransformDefinitionFromApplicationHeaders
}

type GetTransformDefinitionFromApplicationResponse struct {
	ContentType         string
	ErrorModel          *shared.ErrorModel
	StatusCode          int64
	TransformDefinition *shared.TransformDefinition
}
