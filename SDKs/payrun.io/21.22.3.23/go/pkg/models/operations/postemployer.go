package operations

import (
	"openapi/pkg/models/shared"
)

type PostEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostEmployerRequest struct {
	Headers PostEmployerHeaders
	Request shared.Employer `request:"mediaType=application/json"`
}

type PostEmployerResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
