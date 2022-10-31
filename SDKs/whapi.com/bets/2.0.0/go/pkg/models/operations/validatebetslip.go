package operations

import (
	"openapi/pkg/models/shared"
)

type ValidateBetslipQueryParams struct {
	Expanded *string `queryParam:"style=form,explode=true,name=expanded"`
}

type ValidateBetslipHeaders struct {
	APIKey    string `header:"style=simple,explode=false,name=apiKey"`
	APISecret string `header:"style=simple,explode=false,name=apiSecret"`
}

type ValidateBetslipRequest struct {
	QueryParams ValidateBetslipQueryParams
	Headers     ValidateBetslipHeaders
	Request     shared.BetSlipRequest `request:"mediaType=application/json"`
}

type ValidateBetslipResponse struct {
	ContentType     string
	StatusCode      int64
	BetSlipResponse *shared.BetSlipResponse
}
