package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegionsResponse struct {
	ContentType     string
	StatusCode      int64
	OnDemandRegions []shared.OnDemandRegion
}
