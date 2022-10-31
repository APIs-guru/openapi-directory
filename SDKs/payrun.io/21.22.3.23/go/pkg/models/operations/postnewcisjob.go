package operations

import (
	"openapi/pkg/models/shared"
)

type PostNewCisJobHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
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
