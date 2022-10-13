package shared

type APIException struct {
	InnerException        *interface{}      `json:"InnerException"`
	Message               *string           `json:"Message"`
	Source                *string           `json:"Source"`
	StackTrace            *string           `json:"StackTrace"`
	CustomError           *interface{}      `json:"customError"`
	Errors                []ValidationError `json:"errors"`
	IsCustomErrorObject   *bool             `json:"isCustomErrorObject"`
	IsModelValidatonError *bool             `json:"isModelValidatonError"`
	ReferenceDocumentLink *string           `json:"referenceDocumentLink"`
	ReferenceErrorCode    *string           `json:"referenceErrorCode"`
	StatusCode            *int32            `json:"statusCode"`
}
