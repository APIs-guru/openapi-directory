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
	Authorization string `header:"name=Authorization"`
}

type EndpointGetAnAlbumsTracksSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetAnAlbumsTracksRequest struct {
	PathParams  EndpointGetAnAlbumsTracksPathParams
	QueryParams EndpointGetAnAlbumsTracksQueryParams
	Headers     EndpointGetAnAlbumsTracksHeaders
	Security    EndpointGetAnAlbumsTracksSecurity
}

type EndpointGetAnAlbumsTracks200ApplicationJSON struct {
	Href     *string                        `json:"href"`
	Items    []shared.SimplifiedTrackObject `json:"items"`
	Limit    *int32                         `json:"limit"`
	Next     *string                        `json:"next"`
	Offset   *int32                         `json:"offset"`
	Previous *string                        `json:"previous"`
	Total    *int32                         `json:"total"`
}

type EndpointGetAnAlbumsTracksResponse struct {
	ContentType                                       string
	ErrorResponseObject                               *shared.ErrorResponseObject
	StatusCode                                        int64
	EndpointGetAnAlbumsTracks200ApplicationJSONObject *EndpointGetAnAlbumsTracks200ApplicationJSON
}
