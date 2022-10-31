package operations

import (
	"openapi/pkg/models/shared"
)

type InviteUserRequest struct {
	Request shared.InviteUserRequest `request:"mediaType=application/json"`
}

type InviteUserResponse struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse409 *interface{}
	InlineResponse412 *interface{}
}
