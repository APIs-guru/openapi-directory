package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointUnfollowArtistsUsersQueryParams struct {
	Ids  string `queryParam:"style=form,explode=true,name=ids"`
	Type string `queryParam:"style=form,explode=true,name=type"`
}

type EndpointUnfollowArtistsUsersHeaders struct {
	Authorization string  `header:"style=simple,explode=false,name=Authorization"`
	ContentType   *string `header:"style=simple,explode=false,name=Content-Type"`
}

type EndpointUnfollowArtistsUsersRequestBody struct {
	Ids []string `json:"ids,omitempty"`
}

type EndpointUnfollowArtistsUsersSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointUnfollowArtistsUsersRequest struct {
	QueryParams EndpointUnfollowArtistsUsersQueryParams
	Headers     EndpointUnfollowArtistsUsersHeaders
	Request     *EndpointUnfollowArtistsUsersRequestBody `request:"mediaType=application/json"`
	Security    EndpointUnfollowArtistsUsersSecurity
}

type EndpointUnfollowArtistsUsersResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
