package operations

import (
	"openapi/pkg/models/shared"
)

type PostNominalCodePathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PostNominalCodeHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostNominalCodeRequest struct {
	PathParams PostNominalCodePathParams
	Headers    PostNominalCodeHeaders
	Request    shared.NominalCode `request:"mediaType=application/json"`
}

type PostNominalCodeResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
