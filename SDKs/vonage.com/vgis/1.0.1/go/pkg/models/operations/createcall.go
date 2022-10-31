package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCallRequest struct {
	Request shared.CallCreate `request:"mediaType=application/json"`
}

type CreateCallResponse struct {
	Calls         []shared.Call
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
