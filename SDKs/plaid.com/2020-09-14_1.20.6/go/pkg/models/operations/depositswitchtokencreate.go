package operations

import (
	"openapi/pkg/models/shared"
)

type DepositSwitchTokenCreateRequest struct {
	Request shared.DepositSwitchTokenCreateRequest `request:"mediaType=application/json"`
}

type DepositSwitchTokenCreateResponse struct {
	ContentType                      string
	DepositSwitchTokenCreateResponse map[string]interface{}
	StatusCode                       int64
}
