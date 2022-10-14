package shared

type Account struct {
	RemainingAPICalls    *int64 `json:"remaining_api_calls,omitempty"`
	RemainingConcurrency *int64 `json:"remaining_concurrency,omitempty"`
	ResetsAt             *int64 `json:"resets_at,omitempty"`
}
