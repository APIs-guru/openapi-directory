package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserEpisodesQueryParams struct {
	ShowID *int64 `queryParam:"style=form,explode=true,name=show_id"`
}

type GetUserEpisodesRequest struct {
	QueryParams GetUserEpisodesQueryParams
}

type GetUserEpisodesResponse struct {
	ContentType    string
	MarkedEpisodes []shared.MarkedEpisode
	StatusCode     int64
}
