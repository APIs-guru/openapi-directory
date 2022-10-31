package operations

import (
	"openapi/pkg/models/shared"
)

type GetLatestAgentVersionResponse struct {
	ComponentVersion *shared.ComponentVersion
	ContentType      string
	StatusCode       int64
}
