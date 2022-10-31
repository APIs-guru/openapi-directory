package operations

import (
	"openapi/pkg/models/shared"
)

type ProcessorAuthGetRequest struct {
	Request shared.ProcessorAuthGetRequest `request:"mediaType=application/json"`
}

type ProcessorAuthGetResponse struct {
	ContentType              string
	ProcessorAuthGetResponse map[string]interface{}
	StatusCode               int64
}
