package shared

type ErrorLocationTypeEnum string

const (
	ErrorLocationTypeEnumRequestBody  ErrorLocationTypeEnum = "requestBody"
	ErrorLocationTypeEnumQueryParam   ErrorLocationTypeEnum = "queryParam"
	ErrorLocationTypeEnumRequestParam ErrorLocationTypeEnum = "requestParam"
	ErrorLocationTypeEnumHeader       ErrorLocationTypeEnum = "header"
	ErrorLocationTypeEnumPathParam    ErrorLocationTypeEnum = "pathParam"
)

type Error struct {
	ErrorCode           *string                `json:"errorCode,omitempty"`
	ErrorData           *ErrorData             `json:"errorData,omitempty"`
	ErrorMessage        *string                `json:"errorMessage,omitempty"`
	LocalisationDetails *LocalisationDetails   `json:"localisationDetails,omitempty"`
	Location            *string                `json:"location,omitempty"`
	LocationType        *ErrorLocationTypeEnum `json:"locationType,omitempty"`
	ReasonCode          *string                `json:"reasonCode,omitempty"`
}
