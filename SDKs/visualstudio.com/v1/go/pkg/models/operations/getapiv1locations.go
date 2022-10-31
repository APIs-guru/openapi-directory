package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1LocationsResponse struct {
	Body            []byte
	ContentType     string
	LocationsResult *shared.LocationsResult
	StatusCode      int64
}
