package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetFeaturedPlaylistsQueryParams struct {
	Country   *string `queryParam:"style=form,explode=true,name=country"`
	Limit     *int32  `queryParam:"style=form,explode=true,name=limit"`
	Locale    *string `queryParam:"style=form,explode=true,name=locale"`
	Offset    *int32  `queryParam:"style=form,explode=true,name=offset"`
	Timestamp *string `queryParam:"style=form,explode=true,name=timestamp"`
}

type EndpointGetFeaturedPlaylistsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetFeaturedPlaylistsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetFeaturedPlaylistsRequest struct {
	QueryParams EndpointGetFeaturedPlaylistsQueryParams
	Headers     EndpointGetFeaturedPlaylistsHeaders
	Security    EndpointGetFeaturedPlaylistsSecurity
}

type EndpointGetFeaturedPlaylistsResponse struct {
	ContentType            string
	ErrorResponseObject    *shared.ErrorResponseObject
	FeaturedPlaylistObject *shared.FeaturedPlaylistObject
	StatusCode             int64
}
