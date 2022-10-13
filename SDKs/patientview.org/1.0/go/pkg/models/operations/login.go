package operations

import (
	"openapi/pkg/models/shared"
)

type LogInRequest struct {
	Request *shared.Credentials `request:"mediaType=application/json"`
}

type LogInResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
