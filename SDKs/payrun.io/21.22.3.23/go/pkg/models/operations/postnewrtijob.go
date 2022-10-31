package operations

import (
	"openapi/pkg/models/shared"
)

type PostNewRtiJobHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostNewRtiJobRequest struct {
	Headers PostNewRtiJobHeaders
	Request shared.RtiJobInstruction `request:"mediaType=application/json"`
}

type PostNewRtiJobResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
