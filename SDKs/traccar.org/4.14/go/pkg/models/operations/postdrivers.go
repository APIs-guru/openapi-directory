package operations

import (
	"openapi/pkg/models/shared"
)

type PostDriversRequest struct {
	Request shared.Driver `request:"mediaType=application/json"`
}

type PostDriversResponse struct {
	ContentType string
	Driver      *shared.Driver
	StatusCode  int64
}
