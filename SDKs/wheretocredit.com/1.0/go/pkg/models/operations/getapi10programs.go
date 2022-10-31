package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPI10ProgramsResponse struct {
	ContentType string
	Programs    []shared.Program
	StatusCode  int64
}
