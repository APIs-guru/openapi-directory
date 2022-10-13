package operations

import (
	"openapi/pkg/models/shared"
)

type PostPensionIntoEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PostPensionIntoEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostPensionIntoEmployerRequest struct {
	PathParams PostPensionIntoEmployerPathParams
	Headers    PostPensionIntoEmployerHeaders
	Request    shared.Pension `request:"mediaType=application/json"`
}

type PostPensionIntoEmployerResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
