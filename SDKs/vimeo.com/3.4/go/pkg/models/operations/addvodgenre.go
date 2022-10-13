package operations

import (
	"openapi/pkg/models/shared"
)

type AddVodGenrePathParams struct {
	GenreID    string  `pathParam:"style=simple,explode=false,name=genre_id"`
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type AddVodGenreSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVodGenreRequest struct {
	PathParams AddVodGenrePathParams
	Security   AddVodGenreSecurity
}

type AddVodGenreResponse struct {
	ContentType   string
	StatusCode    int64
	LegacyError   *shared.LegacyError
	OnDemandGenre *shared.OnDemandGenre
}
