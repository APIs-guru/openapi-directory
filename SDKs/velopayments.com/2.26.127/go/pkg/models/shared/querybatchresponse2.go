package shared

type QueryBatchResponse2StatusEnum string

const (
	QueryBatchResponse2StatusEnumSubmitted QueryBatchResponse2StatusEnum = "SUBMITTED"
	QueryBatchResponse2StatusEnumAccepted  QueryBatchResponse2StatusEnum = "ACCEPTED"
)

type QueryBatchResponse2 struct {
	FailureCount *int64                         `json:"failureCount"`
	Failures     []FailedSubmission2            `json:"failures"`
	PendingCount *int64                         `json:"pendingCount"`
	Status       *QueryBatchResponse2StatusEnum `json:"status"`
}
