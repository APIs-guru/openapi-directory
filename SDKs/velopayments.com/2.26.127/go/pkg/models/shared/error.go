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
	ErrorCode           *string                `json:"errorCode"`
	ErrorData           *ErrorData             `json:"errorData"`
	ErrorMessage        *string                `json:"errorMessage"`
	LocalisationDetails *LocalisationDetails   `json:"localisationDetails"`
	Location            *string                `json:"location"`
	LocationType        *ErrorLocationTypeEnum `json:"locationType"`
	ReasonCode          *string                `json:"reasonCode"`
}
