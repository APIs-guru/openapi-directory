package shared

type QueryBatchResponseStatusEnum string

const (
	QueryBatchResponseStatusEnumSubmitted QueryBatchResponseStatusEnum = "SUBMITTED"
	QueryBatchResponseStatusEnumAccepted  QueryBatchResponseStatusEnum = "ACCEPTED"
)

type QueryBatchResponse struct {
	FailureCount *int64                        `json:"failureCount"`
	Failures     []FailedSubmission            `json:"failures"`
	PendingCount *int64                        `json:"pendingCount"`
	Status       *QueryBatchResponseStatusEnum `json:"status"`
}
