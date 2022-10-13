package operations

import (
	"openapi/pkg/models/shared"
)

type PostNewRtiJobHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
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
