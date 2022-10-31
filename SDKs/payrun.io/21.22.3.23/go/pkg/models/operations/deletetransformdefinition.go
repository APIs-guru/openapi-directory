package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTransformDefinitionPathParams struct {
	TransformDefinitionID string `pathParam:"style=simple,explode=false,name=TransformDefinitionId"`
}

type DeleteTransformDefinitionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteTransformDefinitionRequest struct {
	PathParams DeleteTransformDefinitionPathParams
	Headers    DeleteTransformDefinitionHeaders
}

type DeleteTransformDefinitionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
