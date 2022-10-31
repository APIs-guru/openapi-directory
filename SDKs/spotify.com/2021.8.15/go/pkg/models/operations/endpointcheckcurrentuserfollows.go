package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointCheckCurrentUserFollowsQueryParams struct {
	Ids  string `queryParam:"style=form,explode=true,name=ids"`
	Type string `queryParam:"style=form,explode=true,name=type"`
}

type EndpointCheckCurrentUserFollowsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointCheckCurrentUserFollowsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointCheckCurrentUserFollowsRequest struct {
	QueryParams EndpointCheckCurrentUserFollowsQueryParams
	Headers     EndpointCheckCurrentUserFollowsHeaders
	Security    EndpointCheckCurrentUserFollowsSecurity
}

type EndpointCheckCurrentUserFollowsResponse struct {
	ContentType                                               string
	ErrorResponseObject                                       *shared.ErrorResponseObject
	StatusCode                                                int64
	EndpointCheckCurrentUserFollows200ApplicationJSONBooleans []bool
}
