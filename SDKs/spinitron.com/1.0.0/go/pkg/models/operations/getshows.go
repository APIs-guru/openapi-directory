package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetShowsQueryParams struct {
	Count  *int64     `queryParam:"style=form,explode=true,name=count"`
	End    *time.Time `queryParam:"style=form,explode=true,name=end"`
	Expand []string   `queryParam:"style=form,explode=true,name=expand"`
	Fields []string   `queryParam:"style=form,explode=true,name=fields"`
	Page   *int64     `queryParam:"style=form,explode=true,name=page"`
	Start  *time.Time `queryParam:"style=form,explode=true,name=start"`
}

type GetShowsRequest struct {
	QueryParams GetShowsQueryParams
}

type GetShows200ApplicationJSONLinks struct {
	Self *shared.Link `json:"self"`
}

type GetShows200ApplicationJSON struct {
	Links *GetShows200ApplicationJSONLinks `json:"_links"`
	Meta  *shared.Pagination               `json:"_meta"`
	Items []shared.Show                    `json:"items"`
}

type GetShowsResponse struct {
	Body                             []byte
	ContentType                      string
	Error                            *shared.Error
	GetShows200ApplicationJSONObject *GetShows200ApplicationJSON
	StatusCode                       int64
}
