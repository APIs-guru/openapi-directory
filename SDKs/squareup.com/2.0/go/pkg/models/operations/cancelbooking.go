package operations

import (
	"openapi/pkg/models/shared"
)

type CancelBookingPathParams struct {
	BookingID string `pathParam:"style=simple,explode=false,name=booking_id"`
}

type CancelBookingSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CancelBookingRequest struct {
	PathParams CancelBookingPathParams
	Request    shared.CancelBookingRequest `request:"mediaType=application/json"`
	Security   CancelBookingSecurity
}

type CancelBookingResponse struct {
	CancelBookingResponse *shared.CancelBookingResponse
	ContentType           string
	StatusCode            int64
}
