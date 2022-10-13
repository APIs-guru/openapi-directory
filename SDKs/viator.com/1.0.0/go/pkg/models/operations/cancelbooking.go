package operations

import (
	"openapi/pkg/models/shared"
)

var CancelBookingServers = []string{
	"https://api.sandbox.viator.com/partner",
}

type CancelBookingPathParams struct {
	BookingReference string `pathParam:"style=simple,explode=false,name=booking-reference"`
}

type CancelBookingHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type CancelBookingRequest struct {
	ServerURL  *string
	PathParams CancelBookingPathParams
	Headers    CancelBookingHeaders
	Request    *shared.CancellationRequest `request:"mediaType=application/json"`
}

type CancelBooking400ApplicationJSONCodeEnum string

const (
	CancelBooking400ApplicationJSONCodeEnumBadRequest CancelBooking400ApplicationJSONCodeEnum = "BAD_REQUEST"
)

type CancelBooking400ApplicationJSONMessageEnum string

const (
	CancelBooking400ApplicationJSONMessageEnumMissingCancellationReason CancelBooking400ApplicationJSONMessageEnum = "Missing cancellation reason"
)

type CancelBooking400ApplicationJSON struct {
	Code       *CancelBooking400ApplicationJSONCodeEnum    `json:"code"`
	Message    *CancelBooking400ApplicationJSONMessageEnum `json:"message"`
	Timestamp  *string                                     `json:"timestamp"`
	TrackingID *string                                     `json:"trackingId"`
}

type CancelBooking404ApplicationJSONCodeEnum string

const (
	CancelBooking404ApplicationJSONCodeEnumNotFound CancelBooking404ApplicationJSONCodeEnum = "NOT_FOUND"
)

type CancelBooking404ApplicationJSONMessageEnum string

const (
	CancelBooking404ApplicationJSONMessageEnumBookingNotFound CancelBooking404ApplicationJSONMessageEnum = "Booking not found"
)

type CancelBooking404ApplicationJSON struct {
	Code       *CancelBooking404ApplicationJSONCodeEnum    `json:"code"`
	Message    *CancelBooking404ApplicationJSONMessageEnum `json:"message"`
	Timestamp  *string                                     `json:"timestamp"`
	TrackingID *string                                     `json:"trackingId"`
}

type CancelBookingResponse struct {
	FourHundredAndOneUnauthorized         *shared.FourHundredAndOneUnauthorized
	FourHundredAndSixNotAcceptable        *shared.FourHundredAndSixNotAcceptable
	FiveHundredInternalServerError        *shared.FiveHundredInternalServerError
	FiveHundredAndThreeServiceUnavailable *shared.FiveHundredAndThreeServiceUnavailable
	CancelBookingResponse                 *shared.CancelBookingResponse
	ContentType                           string
	StatusCode                            int64
	CancelBooking400ApplicationJSONObject *CancelBooking400ApplicationJSON
	CancelBooking404ApplicationJSONObject *CancelBooking404ApplicationJSON
}
