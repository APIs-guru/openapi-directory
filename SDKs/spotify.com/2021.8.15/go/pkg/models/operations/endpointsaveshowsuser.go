package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointSaveShowsUserQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointSaveShowsUserHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointSaveShowsUserRequestBody struct {
	Ids []string `json:"ids"`
}

type EndpointSaveShowsUserSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointSaveShowsUserRequest struct {
	QueryParams EndpointSaveShowsUserQueryParams
	Headers     EndpointSaveShowsUserHeaders
	Request     *EndpointSaveShowsUserRequestBody `request:"mediaType=application/json"`
	Security    EndpointSaveShowsUserSecurity
}

type EndpointSaveShowsUserResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
