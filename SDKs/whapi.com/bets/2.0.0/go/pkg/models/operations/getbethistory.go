package operations

import (
	"openapi/pkg/models/shared"
)

type GetBetHistoryQueryParams struct {
	DateFrom string   `queryParam:"style=form,explode=true,name=dateFrom"`
	DateTo   string   `queryParam:"style=form,explode=true,name=dateTo"`
	Exclude  []string `queryParam:"style=form,explode=false,name=exclude"`
	Fields   []string `queryParam:"style=form,explode=false,name=fields"`
	Include  []string `queryParam:"style=form,explode=false,name=include"`
	Page     *float64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *float64 `queryParam:"style=form,explode=true,name=pageSize"`
	Settled  *bool    `queryParam:"style=form,explode=true,name=settled"`
	Sort     *string  `queryParam:"style=form,explode=true,name=sort"`
}

type GetBetHistoryHeaders struct {
	APIKey    string `header:"name=apiKey"`
	APISecret string `header:"name=apiSecret"`
	APITicket string `header:"name=apiTicket"`
}

type GetBetHistoryRequest struct {
	QueryParams GetBetHistoryQueryParams
	Headers     GetBetHistoryHeaders
}

type GetBetHistoryResponse struct {
	ContentType        string
	StatusCode         int64
	BetHistoryResponse *shared.BetHistoryResponse
	Errors             *shared.Errors
}
