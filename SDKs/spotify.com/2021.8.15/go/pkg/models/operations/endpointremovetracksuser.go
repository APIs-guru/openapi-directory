package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointRemoveTracksUserQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointRemoveTracksUserHeaders struct {
	Authorization string  `header:"style=simple,explode=false,name=Authorization"`
	ContentType   *string `header:"style=simple,explode=false,name=Content-Type"`
}

type EndpointRemoveTracksUserRequestBody struct {
	Ids []string `json:"ids,omitempty"`
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
