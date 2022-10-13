package operations

import (
	"openapi/pkg/models/shared"
)

type PutServerRequest struct {
	Request shared.Server `request:"mediaType=application/json"`
}

type PutServerResponse struct {
	ContentType string
	Server      *shared.Server
	StatusCode  int64
}
