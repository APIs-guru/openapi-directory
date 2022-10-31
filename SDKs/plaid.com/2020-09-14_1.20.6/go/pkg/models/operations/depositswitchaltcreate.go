package operations

import (
	"openapi/pkg/models/shared"
)

type DepositSwitchAltCreateRequest struct {
	Request shared.DepositSwitchAltCreateRequest `request:"mediaType=application/json"`
}

type DepositSwitchAltCreateResponse struct {
	ContentType                    string
	DepositSwitchAltCreateResponse map[string]interface{}
	StatusCode                     int64
}
