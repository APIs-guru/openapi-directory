package operations

import (
	"openapi/pkg/models/shared"
)

type PostEmployerSecretPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PostEmployerSecretHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostEmployerSecretRequest struct {
	PathParams PostEmployerSecretPathParams
	Headers    PostEmployerSecretHeaders
}

type PostEmployerSecretResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
