package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type GetVodRequest struct {
	PathParams GetVodPathParams
}

type GetVodResponse struct {
	ContentType  string
	StatusCode   int64
	LegacyError  *shared.LegacyError
	OnDemandPage *shared.OnDemandPage
}
