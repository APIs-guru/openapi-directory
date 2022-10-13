package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodPosterPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
	PosterID   float64 `pathParam:"style=simple,explode=false,name=poster_id"`
}

type GetVodPosterRequest struct {
	PathParams GetVodPosterPathParams
}

type GetVodPosterResponse struct {
	ContentType string
	StatusCode  int64
	Picture     *shared.Picture
}
