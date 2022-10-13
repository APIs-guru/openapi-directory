package shared

type FourHundredAndSixNotAcceptableCodeEnum string

const (
	FourHundredAndSixNotAcceptableCodeEnumInvalidHeaderValue FourHundredAndSixNotAcceptableCodeEnum = "INVALID_HEADER_VALUE"
)

type FourHundredAndSixNotAcceptable struct {
	Code       *FourHundredAndSixNotAcceptableCodeEnum `json:"code"`
	Message    *string                                 `json:"message"`
	Timestamp  *string                                 `json:"timestamp"`
	TrackingID *string                                 `json:"trackingId"`
}
