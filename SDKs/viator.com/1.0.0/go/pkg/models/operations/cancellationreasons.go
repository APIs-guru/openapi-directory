package operations

import (
	"openapi/pkg/models/shared"
)

var CancellationReasonsServerList = []string{
	"https://api.sandbox.viator.com/partner",
}

type CancellationReasonsHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type CancellationReasonsRequest struct {
	ServerURL *string
	Headers   CancellationReasonsHeaders
}

type CancellationReasonsResponse struct {
	FourHundredAndOneUnauthorized         *shared.FourHundredAndOneUnauthorized
	FourHundredAndSixNotAcceptable        *shared.FourHundredAndSixNotAcceptable
	FiveHundredInternalServerError        *shared.FiveHundredInternalServerError
	FiveHundredAndThreeServiceUnavailable *shared.FiveHundredAndThreeServiceUnavailable
	CancellationReasonsResponses          []shared.CancellationReasonsResponse
	ContentType                           string
	StatusCode                            int64
}
