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
    Code *FiveHundredAndThreeServiceUnavailableCodeEnum `json:"code,omitempty"`
    Message *FiveHundredAndThreeServiceUnavailableMessageEnum `json:"message,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    TrackingID *string `json:"trackingId,omitempty"`
    
}

