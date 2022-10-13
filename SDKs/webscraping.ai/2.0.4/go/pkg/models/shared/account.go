package shared

type Account struct {
	RemainingAPICalls    *int64 `json:"remaining_api_calls"`
	RemainingConcurrency *int64 `json:"remaining_concurrency"`
	ResetsAt             *int64 `json:"resets_at"`
}
