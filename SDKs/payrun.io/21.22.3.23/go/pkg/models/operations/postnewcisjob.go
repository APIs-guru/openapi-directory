package operations

import (
	"openapi/pkg/models/shared"
)

type PostNewCisJobHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostNewCisJobRequest struct {
	Headers PostNewCisJobHeaders
	Request shared.CisJobInstructionBase `request:"mediaType=application/json"`
}

type PostNewCisJobResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
