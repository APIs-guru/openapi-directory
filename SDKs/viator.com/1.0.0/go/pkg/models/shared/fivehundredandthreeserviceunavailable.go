package shared

type FiveHundredAndThreeServiceUnavailableCodeEnum string

const (
	FiveHundredAndThreeServiceUnavailableCodeEnumServiceUnavailable FiveHundredAndThreeServiceUnavailableCodeEnum = "SERVICE_UNAVAILABLE"
)

type FiveHundredAndThreeServiceUnavailableMessageEnum string

const (
	FiveHundredAndThreeServiceUnavailableMessageEnumInternalServerError FiveHundredAndThreeServiceUnavailableMessageEnum = "Internal server error"
)

type FiveHundredAndThreeServiceUnavailable struct {
	Code       *FiveHundredAndThreeServiceUnavailableCodeEnum    `json:"code"`
	Message    *FiveHundredAndThreeServiceUnavailableMessageEnum `json:"message"`
	Timestamp  *string                                           `json:"timestamp"`
	TrackingID *string                                           `json:"trackingId"`
}
