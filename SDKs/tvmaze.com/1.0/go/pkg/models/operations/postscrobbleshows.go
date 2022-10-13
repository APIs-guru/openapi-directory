package operations

import (
	"time"
)

type PostScrobbleShowsQueryParams struct {
	ImdbID    *int64 `queryParam:"style=form,explode=true,name=imdb_id"`
	ThetvdbID *int64 `queryParam:"style=form,explode=true,name=thetvdb_id"`
	TvmazeID  *int64 `queryParam:"style=form,explode=true,name=tvmaze_id"`
}

type PostScrobbleShowsRequestBody struct {
	Airdate  *time.Time   `json:"airdate"`
	Episode  *int64       `json:"episode"`
	MarkedAt *int64       `json:"marked_at"`
	Season   *int64       `json:"season"`
	Type     *interface{} `json:"type"`
}

type PostScrobbleShowsRequest struct {
	QueryParams PostScrobbleShowsQueryParams
	Request     []PostScrobbleShowsRequestBody `request:"mediaType=application/json"`
}

type PostScrobbleShowsResponse struct {
	BulkResponse []interface{}
	ContentType  string
	StatusCode   int64
}
