package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetAnAlbumsTracksPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EndpointGetAnAlbumsTracksQueryParams struct {
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Market *string `queryParam:"style=form,explode=true,name=market"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetAnAlbumsTracksHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetAnAlbumsTracksSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

// EndpointGetAnAlbumsTracks200ApplicationJSON

// https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
type EndpointGetAnAlbumsTracks200ApplicationJSON struct {
	Href     *string                        `json:"href,omitempty"`
	Items    []shared.SimplifiedTrackObject `json:"items,omitempty"`
	Limit    *int32                         `json:"limit,omitempty"`
	Next     *string                        `json:"next,omitempty"`
	Offset   *int32                         `json:"offset,omitempty"`
	Previous *string                        `json:"previous,omitempty"`
	Total    *int32                         `json:"total,omitempty"`
}

type EndpointGetAnAlbumsTracksRequest struct {
	PathParams  EndpointGetAnAlbumsTracksPathParams
	QueryParams EndpointGetAnAlbumsTracksQueryParams
	Headers     EndpointGetAnAlbumsTracksHeaders
	Security    EndpointGetAnAlbumsTracksSecurity
}

type EndpointGetAnAlbumsTracksResponse struct {
	ContentType                                       string
	ErrorResponseObject                               *shared.ErrorResponseObject
	StatusCode                                        int64
	EndpointGetAnAlbumsTracks200ApplicationJSONObject *EndpointGetAnAlbumsTracks200ApplicationJSON
}
