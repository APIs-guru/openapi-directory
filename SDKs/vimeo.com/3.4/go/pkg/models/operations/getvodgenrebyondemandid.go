package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodGenreByOndemandIDPathParams struct {
	GenreID    string  `pathParam:"style=simple,explode=false,name=genre_id"`
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type GetVodGenreByOndemandIDRequest struct {
	PathParams GetVodGenreByOndemandIDPathParams
}

type GetVodGenreByOndemandIDResponse struct {
	ContentType   string
	StatusCode    int64
	LegacyError   *shared.LegacyError
	OnDemandGenre *shared.OnDemandGenre
}
