package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSpinsQueryParams struct {
	Count      *int64     `queryParam:"style=form,explode=true,name=count"`
	End        *time.Time `queryParam:"style=form,explode=true,name=end"`
	Expand     []string   `queryParam:"style=form,explode=true,name=expand"`
	Fields     []string   `queryParam:"style=form,explode=true,name=fields"`
	Page       *int64     `queryParam:"style=form,explode=true,name=page"`
	PlaylistID *int64     `queryParam:"style=form,explode=true,name=playlist_id"`
	ShowID     *int64     `queryParam:"style=form,explode=true,name=show_id"`
	Start      *time.Time `queryParam:"style=form,explode=true,name=start"`
}

type GetSpinsRequest struct {
	QueryParams GetSpinsQueryParams
}

type GetSpins200ApplicationJSONLinks struct {
	Self *shared.Link `json:"self"`
}

type GetSpins200ApplicationJSON struct {
	Links *GetSpins200ApplicationJSONLinks `json:"_links"`
	Meta  *shared.Pagination               `json:"_meta"`
	Items []shared.Spin                    `json:"items"`
}

type GetSpinsResponse struct {
	Body                             []byte
	ContentType                      string
	GetSpins200ApplicationJSONObject *GetSpins200ApplicationJSON
	StatusCode                       int64
}
