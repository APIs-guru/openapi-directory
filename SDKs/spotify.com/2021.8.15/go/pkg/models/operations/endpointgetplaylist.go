package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetPlaylistPathParams struct {
	PlaylistID string `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type EndpointGetPlaylistQueryParams struct {
	AdditionalTypes *string `queryParam:"style=form,explode=true,name=additional_types"`
	Fields          *string `queryParam:"style=form,explode=true,name=fields"`
	Market          *string `queryParam:"style=form,explode=true,name=market"`
}

type EndpointGetPlaylistHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetPlaylistSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetPlaylistRequest struct {
	PathParams  EndpointGetPlaylistPathParams
	QueryParams EndpointGetPlaylistQueryParams
	Headers     EndpointGetPlaylistHeaders
	Security    EndpointGetPlaylistSecurity
}

type EndpointGetPlaylistResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	PlaylistObject      *shared.PlaylistObject
	StatusCode          int64
}
