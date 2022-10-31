package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetAvailableMarketsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetAvailableMarketsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetAvailableMarketsRequest struct {
	Headers  EndpointGetAvailableMarketsHeaders
	Security EndpointGetAvailableMarketsSecurity
}

type EndpointGetAvailableMarketsResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	MarketsObject       *shared.MarketsObject
	StatusCode          int64
}
