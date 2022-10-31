package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePasswordSelfRequest struct {
	Request shared.SelfUpdatePasswordRequest `request:"mediaType=application/json"`
}

type UpdatePasswordSelfResponse struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
}
