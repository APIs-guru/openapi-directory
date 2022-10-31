package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointCheckUsersSavedShowsQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointCheckUsersSavedShowsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointCheckUsersSavedShowsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointCheckUsersSavedShowsRequest struct {
	QueryParams EndpointCheckUsersSavedShowsQueryParams
	Headers     EndpointCheckUsersSavedShowsHeaders
	Security    EndpointCheckUsersSavedShowsSecurity
}

type EndpointCheckUsersSavedShowsResponse struct {
	ContentType                                            string
	ErrorResponseObject                                    *shared.ErrorResponseObject
	StatusCode                                             int64
	EndpointCheckUsersSavedShows200ApplicationJSONBooleans []bool
}
