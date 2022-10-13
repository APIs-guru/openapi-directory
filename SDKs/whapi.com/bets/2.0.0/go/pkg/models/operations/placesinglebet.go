package operations

import (
	"openapi/pkg/models/shared"
)

type PlaceSingleBetQueryParams struct {
	Exclude []string `queryParam:"style=form,explode=false,name=exclude"`
	Fields  []string `queryParam:"style=form,explode=false,name=fields"`
	Include []string `queryParam:"style=form,explode=false,name=include"`
}

type PlaceSingleBetHeaders struct {
	APIKey    string `header:"name=apiKey"`
	APISecret string `header:"name=apiSecret"`
	APITicket string `header:"name=apiTicket"`
}

type PlaceSingleBetRequest struct {
	QueryParams PlaceSingleBetQueryParams
	Headers     PlaceSingleBetHeaders
	Request     shared.SingleBetRequestBody `request:"mediaType=application/json"`
}

type PlaceSingleBetResponse struct {
	ContentType        string
	StatusCode         int64
	BetDelayedResponse []shared.BetDelayed
	BetPlacedResponse  []shared.BetPlaced
	Errors             *shared.Errors
}
