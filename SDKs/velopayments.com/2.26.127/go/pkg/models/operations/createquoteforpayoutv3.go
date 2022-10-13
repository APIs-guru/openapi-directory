package operations

import (
	"openapi/pkg/models/shared"
)

type CreateQuoteForPayoutV3PathParams struct {
	PayoutID string `pathParam:"style=simple,explode=false,name=payoutId"`
}

type CreateQuoteForPayoutV3Request struct {
	PathParams CreateQuoteForPayoutV3PathParams
}

type CreateQuoteForPayoutV3Response struct {
	ContentType       string
	QuoteResponseV3   *shared.QuoteResponseV3
	StatusCode        int64
	InlineResponse404 *interface{}
	InlineResponse409 *interface{}
}
