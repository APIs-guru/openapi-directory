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
    Code *FiveHundredInternalServerErrorCodeEnum `json:"code,omitempty"`
    Message *FiveHundredInternalServerErrorMessageEnum `json:"message,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    TrackingID *string `json:"trackingId,omitempty"`
    
}

