package operations

import (
	"openapi/pkg/models/shared"
)

type ObtainTokenRequest struct {
	Request shared.ObtainTokenRequest `request:"mediaType=application/json"`
}

type ObtainTokenResponse struct {
	ContentType         string
	ObtainTokenResponse *shared.ObtainTokenResponse
	StatusCode          int64
}
