package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBookingPathParams struct {
	BookingID string `pathParam:"style=simple,explode=false,name=booking_id"`
}

type UpdateBookingSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type UpdateBookingRequest struct {
	PathParams UpdateBookingPathParams
	Request    shared.UpdateBookingRequest `request:"mediaType=application/json"`
	Security   UpdateBookingSecurity
}

type UpdateBookingResponse struct {
	ContentType           string
	StatusCode            int64
	UpdateBookingResponse *shared.UpdateBookingResponse
}
