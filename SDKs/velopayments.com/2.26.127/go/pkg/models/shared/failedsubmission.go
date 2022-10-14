package shared

type FailedSubmission struct {
	FailedSubmission *FailedPayee `json:"failedSubmission,omitempty"`
	FailureMessage   *string      `json:"failureMessage,omitempty"`
}
