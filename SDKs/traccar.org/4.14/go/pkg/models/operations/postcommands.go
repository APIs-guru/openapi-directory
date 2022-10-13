package operations

import (
	"openapi/pkg/models/shared"
)

type PostCommandsRequest struct {
	Request shared.Command `request:"mediaType=application/json"`
}

type PostCommandsResponse struct {
	Command     *shared.Command
	ContentType string
	StatusCode  int64
}
