package shared

type ErrorModelErrorModelErrorCategoryErrorCategoryEnum string

const (
	ErrorModelErrorModelErrorCategoryErrorCategoryEnumGeneral           ErrorModelErrorModelErrorCategoryErrorCategoryEnum = "General"
	ErrorModelErrorModelErrorCategoryErrorCategoryEnumNotFound          ErrorModelErrorModelErrorCategoryErrorCategoryEnum = "NotFound"
	ErrorModelErrorModelErrorCategoryErrorCategoryEnumNotAuthorised     ErrorModelErrorModelErrorCategoryErrorCategoryEnum = "NotAuthorised"
	ErrorModelErrorModelErrorCategoryErrorCategoryEnumValidationFailure ErrorModelErrorModelErrorCategoryErrorCategoryEnum = "ValidationFailure"
)

type ErrorModelErrorModelErrorsErrors struct {
	Error []string `json:"Error"`
}

type ErrorModelErrorModelErrorModel struct {
	Description   *string                                             `json:"Description"`
	ErrorCategory *ErrorModelErrorModelErrorCategoryErrorCategoryEnum `json:"ErrorCategory"`
	Errors        *ErrorModelErrorModelErrorsErrors                   `json:"Errors"`
}

type ErrorModel struct {
	ErrorModel *ErrorModelErrorModelErrorModel `json:"ErrorModel"`
}
