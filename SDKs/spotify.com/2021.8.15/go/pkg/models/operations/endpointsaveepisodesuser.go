package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointSaveEpisodesUserQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointSaveEpisodesUserHeaders struct {
	Authorization string  `header:"style=simple,explode=false,name=Authorization"`
	ContentType   *string `header:"style=simple,explode=false,name=Content-Type"`
}

type EndpointSaveEpisodesUserRequestBody struct {
	Ids []string `json:"ids,omitempty"`
}

type EndpointSaveEpisodesUserSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointSaveEpisodesUserRequest struct {
	QueryParams EndpointSaveEpisodesUserQueryParams
	Headers     EndpointSaveEpisodesUserHeaders
	Request     *EndpointSaveEpisodesUserRequestBody `request:"mediaType=application/json"`
	Security    EndpointSaveEpisodesUserSecurity
}

type EndpointSaveEpisodesUserResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
