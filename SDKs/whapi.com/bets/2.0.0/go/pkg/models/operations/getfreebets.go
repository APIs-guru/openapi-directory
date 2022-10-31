package operations

import (
	"openapi/pkg/models/shared"
)

type GetFreeBetsQueryParams struct {
	Exclude []string `queryParam:"style=form,explode=false,name=exclude"`
	Fields  []string `queryParam:"style=form,explode=false,name=fields"`
	Include []string `queryParam:"style=form,explode=false,name=include"`
}

type GetFreeBetsHeaders struct {
	APIKey    string `header:"style=simple,explode=false,name=apiKey"`
	APISecret string `header:"style=simple,explode=false,name=apiSecret"`
	APITicket string `header:"style=simple,explode=false,name=apiTicket"`
}

type GetFreeBetsRequest struct {
	QueryParams GetFreeBetsQueryParams
	Headers     GetFreeBetsHeaders
}

type GetFreeBetsResponse struct {
	ContentType string
	StatusCode  int64
	FreeBet     []shared.FreeBetDetail
}
