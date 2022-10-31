package operations

import (
	"openapi/pkg/models/shared"
)

type GetLatestPlatformVersionResponse struct {
	ComponentVersion *shared.ComponentVersion
	ContentType      string
	StatusCode       int64
}
