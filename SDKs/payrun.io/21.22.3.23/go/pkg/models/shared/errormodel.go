package shared

type ErrorModelErrorModelErrorCategoryEnum string

const (
	ErrorModelErrorModelErrorCategoryEnumGeneral           ErrorModelErrorModelErrorCategoryEnum = "General"
	ErrorModelErrorModelErrorCategoryEnumNotFound          ErrorModelErrorModelErrorCategoryEnum = "NotFound"
	ErrorModelErrorModelErrorCategoryEnumNotAuthorised     ErrorModelErrorModelErrorCategoryEnum = "NotAuthorised"
	ErrorModelErrorModelErrorCategoryEnumValidationFailure ErrorModelErrorModelErrorCategoryEnum = "ValidationFailure"
)

type ErrorModelErrorModelErrors struct {
	Error []string `json:"Error,omitempty"`
}

type ErrorModelErrorModel struct {
	Description   *string                                `json:"Description,omitempty"`
	ErrorCategory *ErrorModelErrorModelErrorCategoryEnum `json:"ErrorCategory,omitempty"`
	Errors        *ErrorModelErrorModelErrors            `json:"Errors,omitempty"`
}

type ErrorModel struct {
	ErrorModel *ErrorModelErrorModel `json:"ErrorModel,omitempty"`
}
