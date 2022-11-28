package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetPlaylistsTracksPathParams struct {
	PlaylistID string `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type EndpointGetPlaylistsTracksQueryParams struct {
	AdditionalTypes *string `queryParam:"style=form,explode=true,name=additional_types"`
	Fields          *string `queryParam:"style=form,explode=true,name=fields"`
	Limit           *int32  `queryParam:"style=form,explode=true,name=limit"`
	Market          *string `queryParam:"style=form,explode=true,name=market"`
	Offset          *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetPlaylistsTracksHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetPlaylistsTracksSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

// EndpointGetPlaylistsTracks200ApplicationJSON

// https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
type EndpointGetPlaylistsTracks200ApplicationJSON struct {
	Href     *string                      `json:"href,omitempty"`
	Items    []shared.PlaylistTrackObject `json:"items,omitempty"`
	Limit    *int32                       `json:"limit,omitempty"`
	Next     *string                      `json:"next,omitempty"`
	Offset   *int32                       `json:"offset,omitempty"`
	Previous *string                      `json:"previous,omitempty"`
	Total    *int32                       `json:"total,omitempty"`
}

type EndpointGetPlaylistsTracksRequest struct {
	PathParams  EndpointGetPlaylistsTracksPathParams
	QueryParams EndpointGetPlaylistsTracksQueryParams
	Headers     EndpointGetPlaylistsTracksHeaders
	Security    EndpointGetPlaylistsTracksSecurity
}

type EndpointGetPlaylistsTracksResponse struct {
	ContentType                                        string
	ErrorResponseObject                                *shared.ErrorResponseObject
	StatusCode                                         int64
	EndpointGetPlaylistsTracks200ApplicationJSONObject *EndpointGetPlaylistsTracks200ApplicationJSON
}
