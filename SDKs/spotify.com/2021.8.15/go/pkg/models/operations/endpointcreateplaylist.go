package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointCreatePlaylistPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type EndpointCreatePlaylistHeaders struct {
	Authorization string  `header:"name=Authorization"`
	ContentType   *string `header:"name=Content-Type"`
}

type EndpointCreatePlaylistRequestBody struct {
	Collaborative *bool   `json:"collaborative"`
	Description   *string `json:"description"`
	Name          string  `json:"name"`
	Public        *bool   `json:"public"`
}

type EndpointCreatePlaylistSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointCreatePlaylistRequest struct {
	PathParams EndpointCreatePlaylistPathParams
	Headers    EndpointCreatePlaylistHeaders
	Request    EndpointCreatePlaylistRequestBody `request:"mediaType=application/json"`
	Security   EndpointCreatePlaylistSecurity
}

type EndpointCreatePlaylistResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	PlaylistObject      *shared.PlaylistObject
	StatusCode          int64
}
