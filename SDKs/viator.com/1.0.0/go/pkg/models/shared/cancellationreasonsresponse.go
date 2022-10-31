package shared

type CancellationReasonsResponse struct {
	Reasons []CancellationReason `json:"reasons,omitempty"`
}
