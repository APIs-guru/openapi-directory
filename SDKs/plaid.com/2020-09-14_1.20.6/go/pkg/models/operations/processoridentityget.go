package operations

import (
	"openapi/pkg/models/shared"
)

type ProcessorIdentityGetRequest struct {
	Request shared.ProcessorIdentityGetRequest `request:"mediaType=application/json"`
}

type ProcessorIdentityGetResponse struct {
	ContentType                  string
	ProcessorIdentityGetResponse map[string]interface{}
	StatusCode                   int64
}
