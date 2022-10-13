package operations

import (
	"openapi/pkg/models/shared"
)

type IncomeVerificationCreateRequest struct {
	Request shared.IncomeVerificationCreateRequest `request:"mediaType=application/json"`
}

type IncomeVerificationCreateResponse struct {
	ContentType                      string
	IncomeVerificationCreateResponse map[string]interface{}
	StatusCode                       int64
}
