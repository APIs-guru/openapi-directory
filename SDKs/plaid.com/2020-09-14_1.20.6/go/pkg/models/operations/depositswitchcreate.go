package operations

import (
	"openapi/pkg/models/shared"
)

type DepositSwitchCreateRequest struct {
	Request shared.DepositSwitchCreateRequest `request:"mediaType=application/json"`
}

type DepositSwitchCreateResponse struct {
	ContentType                 string
	DepositSwitchCreateResponse map[string]interface{}
	StatusCode                  int64
}
