package shared

type QueryBatchResponseStatusEnum string

const (
	QueryBatchResponseStatusEnumSubmitted QueryBatchResponseStatusEnum = "SUBMITTED"
	QueryBatchResponseStatusEnumAccepted  QueryBatchResponseStatusEnum = "ACCEPTED"
)

type QueryBatchResponse struct {
	FailureCount *int64                        `json:"failureCount,omitempty"`
	Failures     []FailedSubmission            `json:"failures,omitempty"`
	PendingCount *int64                        `json:"pendingCount,omitempty"`
	Status       *QueryBatchResponseStatusEnum `json:"status,omitempty"`
}
