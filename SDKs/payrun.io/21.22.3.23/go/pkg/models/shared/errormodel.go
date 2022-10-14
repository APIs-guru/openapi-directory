package shared

type ErrorModelErrorModelErrorCategoryErrorCategoryEnum string

const (
	ErrorModelErrorModelErrorCategoryErrorCategoryEnumGeneral           ErrorModelErrorModelErrorCategoryErrorCategoryEnum = "General"
	ErrorModelErrorModelErrorCategoryErrorCategoryEnumNotFound          ErrorModelErrorModelErrorCategoryErrorCategoryEnum = "NotFound"
	ErrorModelErrorModelErrorCategoryErrorCategoryEnumNotAuthorised     ErrorModelErrorModelErrorCategoryErrorCategoryEnum = "NotAuthorised"
	ErrorModelErrorModelErrorCategoryErrorCategoryEnumValidationFailure ErrorModelErrorModelErrorCategoryErrorCategoryEnum = "ValidationFailure"
)

type ErrorModelErrorModelErrorsErrors struct {
	Error []string `json:"Error,omitempty"`
}

type ErrorModelErrorModelErrorModel struct {
	Description   *string                                             `json:"Description,omitempty"`
	ErrorCategory *ErrorModelErrorModelErrorCategoryErrorCategoryEnum `json:"ErrorCategory,omitempty"`
	Errors        *ErrorModelErrorModelErrorsErrors                   `json:"Errors,omitempty"`
}

type ErrorModel struct {
	ErrorModel *ErrorModelErrorModelErrorModel `json:"ErrorModel,omitempty"`
}
