package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetACategoriesPlaylistsPathParams struct {
	CategoryID string `pathParam:"style=simple,explode=false,name=category_id"`
}

type EndpointGetACategoriesPlaylistsQueryParams struct {
	Country *string `queryParam:"style=form,explode=true,name=country"`
	Limit   *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset  *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetACategoriesPlaylistsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetACategoriesPlaylistsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetACategoriesPlaylistsRequest struct {
	PathParams  EndpointGetACategoriesPlaylistsPathParams
	QueryParams EndpointGetACategoriesPlaylistsQueryParams
	Headers     EndpointGetACategoriesPlaylistsHeaders
	Security    EndpointGetACategoriesPlaylistsSecurity
}

type EndpointGetACategoriesPlaylistsResponse struct {
	ContentType          string
	ErrorResponseObject  *shared.ErrorResponseObject
	PlaylistPagingObject *shared.PlaylistPagingObject
	StatusCode           int64
}
