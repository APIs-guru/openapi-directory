package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1SasResponse struct {
	Body                     []byte
	ContentType              string
	ProblemDetails           map[string]interface{}
	ScopedSecretResultBodies []shared.ScopedSecretResultBody
	StatusCode               int64
}
