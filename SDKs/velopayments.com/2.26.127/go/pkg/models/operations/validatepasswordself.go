package operations

import (
	"openapi/pkg/models/shared"
)

type ValidatePasswordSelfRequest struct {
	Request shared.PasswordRequest `request:"mediaType=application/json"`
}

type ValidatePasswordSelfResponse struct {
	ContentType              string
	StatusCode               int64
	ValidatePasswordResponse *shared.ValidatePasswordResponse
	InlineResponse400        *interface{}
	InlineResponse401        *interface{}
	InlineResponse403        *interface{}
}
