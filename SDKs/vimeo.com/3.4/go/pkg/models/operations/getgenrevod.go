package operations

import (
	"openapi/pkg/models/shared"
)

type GetGenreVodPathParams struct {
	GenreID    string  `pathParam:"style=simple,explode=false,name=genre_id"`
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type GetGenreVodRequest struct {
	PathParams GetGenreVodPathParams
}

type GetGenreVodResponse struct {
	ContentType  string
	StatusCode   int64
	LegacyError  *shared.LegacyError
	OnDemandPage *shared.OnDemandPage
}
