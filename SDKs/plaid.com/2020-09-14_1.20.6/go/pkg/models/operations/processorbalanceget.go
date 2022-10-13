package operations

import (
	"openapi/pkg/models/shared"
)

type ProcessorBalanceGetRequest struct {
	Request shared.ProcessorBalanceGetRequest `request:"mediaType=application/json"`
}

type ProcessorBalanceGetResponse struct {
	ContentType                 string
	ProcessorBalanceGetResponse map[string]interface{}
	StatusCode                  int64
}
