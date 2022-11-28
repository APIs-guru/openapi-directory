package operations

import (
	"openapi/pkg/models/shared"
)

var CancelBookingQuoteServerList = []string{
	"https://api.sandbox.viator.com/partner",
}

type CancelBookingQuotePathParams struct {
	BookingReference string `pathParam:"style=simple,explode=false,name=booking-reference"`
}

type CancelBookingQuoteRequest struct {
	ServerURL  *string
	PathParams CancelBookingQuotePathParams
}

type CancelBookingQuoteResponse struct {
	FourHundredAndOneUnauthorized         *shared.FourHundredAndOneUnauthorized
	FourHundredAndSixNotAcceptable        *shared.FourHundredAndSixNotAcceptable
	FiveHundredInternalServerError        *shared.FiveHundredInternalServerError
	FiveHundredAndThreeServiceUnavailable *shared.FiveHundredAndThreeServiceUnavailable
	CancelBookingQuoteResponse            *shared.CancelBookingQuoteResponse
	ContentType                           string
	StatusCode                            int64
}
