package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyTokenResponse struct {
	ContentType string
	StatusCode  int64
	Auth        *shared.Auth
	LegacyError *shared.LegacyError
}
