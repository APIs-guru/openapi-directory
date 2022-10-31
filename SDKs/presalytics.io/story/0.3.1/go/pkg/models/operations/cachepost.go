package operations

import (
	"openapi/pkg/models/shared"
)

type CachePostRequest struct {
	Request shared.CachePostRequest `request:"mediaType=application/json"`
}

type CachePostResponse struct {
	ContentType   string
	StatusCode    int64
	ProblemDetail *interface{}
}
