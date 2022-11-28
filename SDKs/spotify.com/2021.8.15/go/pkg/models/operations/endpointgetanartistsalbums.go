package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetAnArtistsAlbumsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EndpointGetAnArtistsAlbumsQueryParams struct {
	IncludeGroups *string `queryParam:"style=form,explode=true,name=include_groups"`
	Limit         *int32  `queryParam:"style=form,explode=true,name=limit"`
	Market        *string `queryParam:"style=form,explode=true,name=market"`
	Offset        *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetAnArtistsAlbumsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetAnArtistsAlbumsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

// EndpointGetAnArtistsAlbums200ApplicationJSON

// https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
type EndpointGetAnArtistsAlbums200ApplicationJSON struct {
	Href     *string                        `json:"href,omitempty"`
	Items    []shared.SimplifiedAlbumObject `json:"items,omitempty"`
	Limit    *int32                         `json:"limit,omitempty"`
	Next     *string                        `json:"next,omitempty"`
	Offset   *int32                         `json:"offset,omitempty"`
	Previous *string                        `json:"previous,omitempty"`
	Total    *int32                         `json:"total,omitempty"`
}

type EndpointGetAnArtistsAlbumsRequest struct {
	PathParams  EndpointGetAnArtistsAlbumsPathParams
	QueryParams EndpointGetAnArtistsAlbumsQueryParams
	Headers     EndpointGetAnArtistsAlbumsHeaders
	Security    EndpointGetAnArtistsAlbumsSecurity
}

type EndpointGetAnArtistsAlbumsResponse struct {
	ContentType                                        string
	ErrorResponseObject                                *shared.ErrorResponseObject
	StatusCode                                         int64
	EndpointGetAnArtistsAlbums200ApplicationJSONObject *EndpointGetAnArtistsAlbums200ApplicationJSON
}
