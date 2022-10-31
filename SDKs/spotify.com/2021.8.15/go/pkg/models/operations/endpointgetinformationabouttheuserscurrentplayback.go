package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams struct {
	AdditionalTypes *string `queryParam:"style=form,explode=true,name=additional_types"`
	Market          *string `queryParam:"style=form,explode=true,name=market"`
}

type EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetInformationAboutTheUsersCurrentPlaybackRequest struct {
	QueryParams EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams
	Headers     EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders
	Security    EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity
}

type EndpointGetInformationAboutTheUsersCurrentPlaybackResponse struct {
	ContentType                   string
	CurrentlyPlayingContextObject *shared.CurrentlyPlayingContextObject
	ErrorResponseObject           *shared.ErrorResponseObject
	StatusCode                    int64
}
