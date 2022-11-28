package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPlaylistsQueryParams struct {
	Count     *int64     `queryParam:"style=form,explode=true,name=count"`
	End       *time.Time `queryParam:"style=form,explode=true,name=end"`
	Expand    []string   `queryParam:"style=form,explode=true,name=expand"`
	Fields    []string   `queryParam:"style=form,explode=true,name=fields"`
	Page      *int64     `queryParam:"style=form,explode=true,name=page"`
	PersonaID *int64     `queryParam:"style=form,explode=true,name=persona_id"`
	ShowID    *int64     `queryParam:"style=form,explode=true,name=show_id"`
	Start     *time.Time `queryParam:"style=form,explode=true,name=start"`
}

type GetPlaylists200ApplicationJSONLinks struct {
	Self *shared.Link `json:"self,omitempty"`
}

type GetPlaylists200ApplicationJSON struct {
	Links *GetPlaylists200ApplicationJSONLinks `json:"_links,omitempty"`
	Meta  *shared.Pagination                   `json:"_meta,omitempty"`
	Items []shared.Playlist                    `json:"items,omitempty"`
}

type GetPlaylistsRequest struct {
	QueryParams GetPlaylistsQueryParams
}

type GetPlaylistsResponse struct {
	Body                                 []byte
	ContentType                          string
	GetPlaylists200ApplicationJSONObject *GetPlaylists200ApplicationJSON
	StatusCode                           int64
}
