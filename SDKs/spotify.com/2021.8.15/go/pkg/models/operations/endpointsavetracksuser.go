package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointSaveTracksUserQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointSaveTracksUserHeaders struct {
	Authorization string  `header:"style=simple,explode=false,name=Authorization"`
	ContentType   *string `header:"style=simple,explode=false,name=Content-Type"`
}

type EndpointSaveTracksUserRequestBody struct {
	Ids []string `json:"ids,omitempty"`
}

type EndpointSaveTracksUserSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointSaveTracksUserRequest struct {
	QueryParams EndpointSaveTracksUserQueryParams
	Headers     EndpointSaveTracksUserHeaders
	Request     *EndpointSaveTracksUserRequestBody `request:"mediaType=application/json"`
	Security    EndpointSaveTracksUserSecurity
}

type EndpointSaveTracksUserResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
