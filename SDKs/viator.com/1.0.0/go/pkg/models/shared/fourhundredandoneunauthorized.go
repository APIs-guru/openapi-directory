package shared

type FourHundredAndOneUnauthorizedCodeEnum string

const (
	FourHundredAndOneUnauthorizedCodeEnumUnauthorized FourHundredAndOneUnauthorizedCodeEnum = "UNAUTHORIZED"
)

type FourHundredAndOneUnauthorizedMessageEnum string

const (
	FourHundredAndOneUnauthorizedMessageEnumInvalidAPIKey FourHundredAndOneUnauthorizedMessageEnum = "Invalid API key"
)

type FourHundredAndOneUnauthorized struct {
	Code       *FourHundredAndOneUnauthorizedCodeEnum    `json:"code"`
	Message    *FourHundredAndOneUnauthorizedMessageEnum `json:"message"`
	Timestamp  *string                                   `json:"timestamp"`
	TrackingID *string                                   `json:"trackingId"`
}
