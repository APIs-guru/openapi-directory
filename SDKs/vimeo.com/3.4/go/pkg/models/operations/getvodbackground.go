package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodBackgroundPathParams struct {
	BackgroundID float64 `pathParam:"style=simple,explode=false,name=background_id"`
	OndemandID   float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type GetVodBackgroundRequest struct {
	PathParams GetVodBackgroundPathParams
}

type GetVodBackgroundResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Picture     *shared.Picture
}
