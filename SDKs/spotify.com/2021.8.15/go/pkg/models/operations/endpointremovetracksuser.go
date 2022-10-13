package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointRemoveTracksUserQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointRemoveTracksUserHeaders struct {
	Authorization string  `header:"name=Authorization"`
	ContentType   *string `header:"name=Content-Type"`
}

type EndpointRemoveTracksUserRequestBody struct {
	Ids []string `json:"ids"`
}

type EndpointRemoveTracksUserSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointRemoveTracksUserRequest struct {
	QueryParams EndpointRemoveTracksUserQueryParams
	Headers     EndpointRemoveTracksUserHeaders
	Request     *EndpointRemoveTracksUserRequestBody `request:"mediaType=application/json"`
	Security    EndpointRemoveTracksUserSecurity
}

type EndpointRemoveTracksUserResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
