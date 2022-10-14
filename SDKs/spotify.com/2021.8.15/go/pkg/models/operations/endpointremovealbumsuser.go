package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointRemoveAlbumsUserQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointRemoveAlbumsUserHeaders struct {
	Authorization string  `header:"name=Authorization"`
	ContentType   *string `header:"name=Content-Type"`
}

type EndpointRemoveAlbumsUserRequestBody struct {
	Ids []string `json:"ids,omitempty"`
}

type EndpointRemoveAlbumsUserSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointRemoveAlbumsUserRequest struct {
	QueryParams EndpointRemoveAlbumsUserQueryParams
	Headers     EndpointRemoveAlbumsUserHeaders
	Request     *EndpointRemoveAlbumsUserRequestBody `request:"mediaType=application/json"`
	Security    EndpointRemoveAlbumsUserSecurity
}

type EndpointRemoveAlbumsUserResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
