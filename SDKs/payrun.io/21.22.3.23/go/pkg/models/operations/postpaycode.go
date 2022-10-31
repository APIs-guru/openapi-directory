package operations

import (
	"openapi/pkg/models/shared"
)

type PostPayCodePathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PostPayCodeHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostPayCodeRequest struct {
	PathParams PostPayCodePathParams
	Headers    PostPayCodeHeaders
	Request    shared.PayCode `request:"mediaType=application/json"`
}

type PostPayCodeResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
