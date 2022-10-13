package shared

type FailedSubmission struct {
	FailedSubmission *FailedPayee `json:"failedSubmission"`
	FailureMessage   *string      `json:"failureMessage"`
}
