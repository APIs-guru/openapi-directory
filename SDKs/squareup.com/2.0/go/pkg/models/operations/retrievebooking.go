package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveBookingPathParams struct {
	BookingID string `pathParam:"style=simple,explode=false,name=booking_id"`
}

type RetrieveBookingSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveBookingRequest struct {
	PathParams RetrieveBookingPathParams
	Security   RetrieveBookingSecurity
}

type RetrieveBookingResponse struct {
	ContentType             string
	RetrieveBookingResponse *shared.RetrieveBookingResponse
	StatusCode              int64
}
