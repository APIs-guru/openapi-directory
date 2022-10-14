package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointChangePlaylistDetailsPathParams struct {
	PlaylistID string `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type EndpointChangePlaylistDetailsHeaders struct {
	Authorization string `header:"name=Authorization"`
	ContentType   string `header:"name=Content-Type"`
}

type EndpointChangePlaylistDetailsRequestBody struct {
	Collaborative *bool   `json:"collaborative,omitempty"`
	Description   *string `json:"description,omitempty"`
	Name          *string `json:"name,omitempty"`
	Public        *bool   `json:"public,omitempty"`
}

type EndpointChangePlaylistDetailsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointChangePlaylistDetailsRequest struct {
	PathParams EndpointChangePlaylistDetailsPathParams
	Headers    EndpointChangePlaylistDetailsHeaders
	Request    *EndpointChangePlaylistDetailsRequestBody `request:"mediaType=application/json"`
	Security   EndpointChangePlaylistDetailsSecurity
}

type EndpointChangePlaylistDetailsResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
