package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointSaveAlbumsUserQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointSaveAlbumsUserHeaders struct {
	Authorization string  `header:"name=Authorization"`
	ContentType   *string `header:"name=Content-Type"`
}

type EndpointSaveAlbumsUserRequestBody struct {
	Ids []string `json:"ids"`
}

type EndpointSaveAlbumsUserSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointSaveAlbumsUserRequest struct {
	QueryParams EndpointSaveAlbumsUserQueryParams
	Headers     EndpointSaveAlbumsUserHeaders
	Request     *EndpointSaveAlbumsUserRequestBody `request:"mediaType=application/json"`
	Security    EndpointSaveAlbumsUserSecurity
}

type EndpointSaveAlbumsUserResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
