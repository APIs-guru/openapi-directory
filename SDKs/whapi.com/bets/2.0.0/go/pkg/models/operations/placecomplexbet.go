package operations

import (
	"openapi/pkg/models/shared"
)

type PlaceComplexBetQueryParams struct {
	Exclude []string `queryParam:"style=form,explode=false,name=exclude"`
	Fields  []string `queryParam:"style=form,explode=false,name=fields"`
	Include []string `queryParam:"style=form,explode=false,name=include"`
}

type PlaceComplexBetHeaders struct {
	APIKey    string `header:"name=apiKey"`
	APISecret string `header:"name=apiSecret"`
	APITicket string `header:"name=apiTicket"`
}

type PlaceComplexBetRequest struct {
	QueryParams PlaceComplexBetQueryParams
	Headers     PlaceComplexBetHeaders
	Request     shared.ComplexBetRequestBody `request:"mediaType=application/json"`
}

type PlaceComplexBetResponse struct {
	ContentType        string
	StatusCode         int64
	BetDelayedResponse []shared.BetDelayed
	BetPlacedResponse  []shared.BetPlaced
	Errors             *shared.Errors
}
