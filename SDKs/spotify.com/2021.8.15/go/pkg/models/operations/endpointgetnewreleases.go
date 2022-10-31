package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetNewReleasesQueryParams struct {
	Country *string `queryParam:"style=form,explode=true,name=country"`
	Limit   *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset  *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetNewReleasesHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetNewReleasesSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetNewReleasesRequest struct {
	QueryParams EndpointGetNewReleasesQueryParams
	Headers     EndpointGetNewReleasesHeaders
	Security    EndpointGetNewReleasesSecurity
}

type EndpointGetNewReleasesResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	NewReleasesObject   *shared.NewReleasesObject
	StatusCode          int64
}
