package shared

type FiveHundredInternalServerErrorCodeEnum string

const (
	FiveHundredInternalServerErrorCodeEnumInternalServerError FiveHundredInternalServerErrorCodeEnum = "INTERNAL_SERVER_ERROR"
)

type FiveHundredInternalServerErrorMessageEnum string

const (
	FiveHundredInternalServerErrorMessageEnumInternalServerError FiveHundredInternalServerErrorMessageEnum = "Internal server error"
)

type FiveHundredInternalServerError struct {
	Code       *FiveHundredInternalServerErrorCodeEnum    `json:"code"`
	Message    *FiveHundredInternalServerErrorMessageEnum `json:"message"`
	Timestamp  *string                                    `json:"timestamp"`
	TrackingID *string                                    `json:"trackingId"`
}
