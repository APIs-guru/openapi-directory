package shared

type FailedSubmission2 struct {
	FailedSubmission *FailedPayee2 `json:"failedSubmission"`
	FailureMessage   *string       `json:"failureMessage"`
}
