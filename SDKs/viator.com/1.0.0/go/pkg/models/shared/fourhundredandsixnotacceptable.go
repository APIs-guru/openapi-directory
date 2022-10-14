package shared

type FourHundredAndSixNotAcceptableCodeEnum string

const (
	FourHundredAndSixNotAcceptableCodeEnumInvalidHeaderValue FourHundredAndSixNotAcceptableCodeEnum = "INVALID_HEADER_VALUE"
)

type FourHundredAndSixNotAcceptable struct {
	Code       *FourHundredAndSixNotAcceptableCodeEnum `json:"code,omitempty"`
	Message    *string                                 `json:"message,omitempty"`
	Timestamp  *string                                 `json:"timestamp,omitempty"`
	TrackingID *string                                 `json:"trackingId,omitempty"`
}
