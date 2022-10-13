package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointStartAUsersPlaybackQueryParams struct {
	DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
}

type EndpointStartAUsersPlaybackHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointStartAUsersPlaybackRequestBody struct {
	ContextURI *string                `json:"context_uri"`
	Offset     map[string]interface{} `json:"offset"`
	PositionMs *int32                 `json:"position_ms"`
	Uris       []string               `json:"uris"`
}

type EndpointStartAUsersPlaybackSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointStartAUsersPlaybackRequest struct {
	QueryParams EndpointStartAUsersPlaybackQueryParams
	Headers     EndpointStartAUsersPlaybackHeaders
	Request     *EndpointStartAUsersPlaybackRequestBody `request:"mediaType=application/json"`
	Security    EndpointStartAUsersPlaybackSecurity
}

type EndpointStartAUsersPlaybackResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
