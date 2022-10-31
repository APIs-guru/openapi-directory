package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointFollowArtistsUsersQueryParams struct {
	Ids  string `queryParam:"style=form,explode=true,name=ids"`
	Type string `queryParam:"style=form,explode=true,name=type"`
}

type EndpointFollowArtistsUsersHeaders struct {
	Authorization string  `header:"style=simple,explode=false,name=Authorization"`
	ContentType   *string `header:"style=simple,explode=false,name=Content-Type"`
}

type EndpointFollowArtistsUsersRequestBody struct {
	Ids []string `json:"ids"`
}

type EndpointFollowArtistsUsersSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointFollowArtistsUsersRequest struct {
	QueryParams EndpointFollowArtistsUsersQueryParams
	Headers     EndpointFollowArtistsUsersHeaders
	Request     EndpointFollowArtistsUsersRequestBody `request:"mediaType=application/json"`
	Security    EndpointFollowArtistsUsersSecurity
}

type EndpointFollowArtistsUsersResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
