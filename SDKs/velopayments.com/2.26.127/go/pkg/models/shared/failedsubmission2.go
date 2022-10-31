package shared



type FailedSubmission2 struct {
    FailedSubmission *FailedPayee2 `json:"failedSubmission,omitempty"`
    FailureMessage *string `json:"failureMessage,omitempty"`
    
}

