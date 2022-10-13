package operations

import (
	"openapi/pkg/models/shared"
)

type PostCisLineTypeIntoEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PostCisLineTypeIntoEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostCisLineTypeIntoEmployerRequest struct {
	PathParams PostCisLineTypeIntoEmployerPathParams
	Headers    PostCisLineTypeIntoEmployerHeaders
	Request    shared.CisLineType `request:"mediaType=application/json"`
}

type PostCisLineTypeIntoEmployerResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
