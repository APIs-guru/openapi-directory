package operations

import (
	"openapi/pkg/models/shared"
)

type PostNewPayRunJobHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostNewPayRunJobRequest struct {
	Headers PostNewPayRunJobHeaders
	Request shared.PayRunJobInstruction `request:"mediaType=application/json"`
}

type PostNewPayRunJobResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
